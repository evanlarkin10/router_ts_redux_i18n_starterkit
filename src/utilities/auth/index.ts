import { Auth } from "aws-amplify";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "./constants";

export async function checkSession() {
  return await Auth.currentAuthenticatedUser()
    .then(() => { return true; })
    .catch(() => { return false; });
}

export async function login(username: string, password: string) {
  let success = false;
  try {
    const user = await Auth.signIn(username, password);
    console.log("SUCCESS", user)
    success = true
  } catch (err) {
    if (err.code === 'UserNotConfirmedException') {
      // The error happens if the user didn't finish the confirmation step when signing up
      // In this case you need to resend the code and confirm the user
      // About how to resend the code and confirm the user, please check the signUp part
      console.log("UserNotConfirmedException")
    } else if (err.code === 'PasswordResetRequiredException') {
      // The error happens when the password is reset in the Cognito console
      // In this case you need to call forgotPassword to reset the password
      // Please check the Forgot Password part.
      console.log("PasswordResetRequiredException")
    } else if (err.code === 'NotAuthorizedException') {
      // The error happens when the incorrect password is provided
      console.log("NotAuthorizedException")
    } else if (err.code === 'UserNotFoundException') {
      // The error happens when the supplied username/email does not exist in the Cognito user pool
      console.log("UserNotFoundException")
    } else {
      console.log("Unknown Error: ", err);
    }
  }
  console.log("Login Success?", success)
  return success
}

export async function logout() {
  let success = false

  try {
    await Auth.signOut()
    success = true
  }

  catch (err) {
    console.log("logouterror", err)
  }

  console.log("Logout return vlaue", success)
  return success
}

export function setAuthCookie(value: String) {
  Cookie.set(COOKIE_USER_KEY, value, {
    expires: 1
  });
}

export function getIdentity() {
  let identity = ""
  Auth.currentUserInfo()
    .then((result) => {
      identity = result.id
    })
    .catch((err) => console.log("ERR:", err))

  return identity
}
