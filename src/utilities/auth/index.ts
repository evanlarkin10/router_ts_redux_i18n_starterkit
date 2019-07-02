// import { Auth } from "aws-amplify";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "./constants";
export function checkSession() {
  let auth = false;
  /* Auth.currentAuthenticatedUser()
    .then(data => {
      if (data) {
        auth = true;
      }
    })
    .catch(err => {
      console.log(err);
    }); */
  if (Cookie.get(COOKIE_USER_KEY)) {
    console.log("Session good ");
    this.setAuthCookie("authenticated");
    auth = true;
  }

  return auth;
}

export function login(email: string, password: string) {
  let success = false;
  /* Auth.currentAuthenticatedUser()
    .then(data => {
      if (data) {
        auth = true;
      }
    })
    .catch(err => {
      console.log(err);
    }); */
  this.setAuthCookie("authenticated"), email, password;
  success = true;
  return success;
}

export function logout() {
  const auth = true;
  /* Auth.currentAuthenticatedUser()
    .then(data => {
      if (data) {
        auth = true;
      }
    })
    .catch(err => {
      console.log(err);
    }); */
  Cookie.remove(COOKIE_USER_KEY);
  return auth;
}

export function setAuthCookie(value: String) {
  Cookie.set(COOKIE_USER_KEY, value, {
    expires: 1
  });
}
