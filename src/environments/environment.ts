// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // ***********************************************************************************************************************
    // * TODO(DEVELOPER): Update values according to: Firebase Console > Overview > Add Firebase to your web app. *
    // ***********************************************************************************************************************
    apiKey: 'AIzaSyCEU5aF2drSOR6u3TEBx0bOg3L0slz- 7i0',
    authDomain: 'localhost',
    databaseURL: 'https://munchkin-card-editor.firebaseio.com',
    projectId: 'munchkin-card-editor',
    storageBucket: 'gs://munchkin-card-editor.appspot.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
