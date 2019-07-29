export const PREFERENCES_KEY = "preferences";
import { POSLayout } from "components/pos/types";
import { setUserPreferences } from "redux/UserAPI/actions";
import { put } from "redux-saga/effects";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "graphql/queries";
import * as mutations from "graphql/mutations";
export interface UserDto {
  identity_id: string;
  email: string;
  first_name: string;
  last_name: string;
  org_id: number;
  org_name: string;
  preferences: string;
}

export interface UserPreferenceDto {
  preferences: string;
}
export interface POSPreferences {
  layouts: { lg: POSLayout[]; md: POSLayout[]; sm: POSLayout[] };
}

export interface UserPreferences {
  pos?: POSPreferences;
}

export default class User implements UserDto {
  public identity_id: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public org_id: number;
  public org_name: string;
  public preferences: string;

  constructor(user?: UserDto) {
    if (user) {
      this.email = user.email;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.org_id = user.org_id;
      this.org_name = user.org_name;
      this.identity_id = user.identity_id;
      this.preferences = user.preferences;
    }
  }
  get dto(): UserDto {
    return Object.assign({}, this);
  }
  static *loadPreferences() {
    const response: any = yield API.graphql(
      graphqlOperation(queries.getPreferences)
    );
    const preferences = JSON.parse(response.data.getPreferences);
    const prefs = JSON.stringify(preferences);
    console.log("SET PREF LOCAL, ", prefs);
    yield localStorage.setItem(PREFERENCES_KEY, prefs);
    return response;
  }
  static *savePreferences(preferences: string) {
    const input = {
      pos_preferences: JSON.stringify(JSON.parse(preferences).pos)
    };
    const response: any = yield API.graphql(
      graphqlOperation(mutations.updatePreferences, { input })
    );
    const posPreferences = JSON.parse(
      response.data.updatePreferences.pos_preferences
    );
    const prefs = JSON.stringify(posPreferences);
    console.log("SET PREF LOCAL, ", prefs);
    yield localStorage.setItem(PREFERENCES_KEY, prefs);
    return response;
  }
  static *updatePreferences(preferences: UserPreferences) {
    const stringPreferences = JSON.stringify(preferences);
    yield User.savePreferences(stringPreferences);
    yield put(setUserPreferences(stringPreferences));
  }
}
