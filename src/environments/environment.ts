// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     // Initialize Firebase
    apiKey: "AIzaSyDTI1KDGIFyQD1qq5cDUmWo6y9b_e1l0Zk",
    authDomain: "angular-auth-firebase-d8ae0.firebaseapp.com",
    databaseURL: "https://angular-auth-firebase-d8ae0.firebaseio.com",
    projectId: "angular-auth-firebase-d8ae0",
    storageBucket: "angular-auth-firebase-d8ae0.appspot.com",
    messagingSenderId: "176715282936"
  },

};


