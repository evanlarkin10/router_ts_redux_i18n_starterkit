export interface UserDto {
  identity_id: string;
  email: string;
  first_name: string;
  last_name: string;
  org_id: number;
  org_name: string;
  preferences: string;
}

export interface POSPreferences {
  layout: Object[];
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
    const response: any = {}; // get from db
    const preferences = JSON.parse(response);
    const prefs = JSON.stringify(preferences);
    yield localStorage.setItem("POSKEY", prefs);
  }
  static *savePreferences() {
    const response: any = {}; // get from db
    const preferences = JSON.parse(response);
    const prefs = JSON.stringify(preferences);
    yield localStorage.setItem("POSKEY", prefs);
  }
}
