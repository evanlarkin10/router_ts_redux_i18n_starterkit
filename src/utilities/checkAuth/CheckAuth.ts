// import { Auth } from "aws-amplify";

export function checkAuth() {
  const auth = false;
  /* Auth.currentAuthenticatedUser()
    .then(data => {
      if (data) {
        auth = true;
      }
    })
    .catch(err => {
      console.log(err);
    }); */
  return auth;
}
