// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import en from './translations/en.json';
import ar from './translations/ar.json';

import { defaultNS, resources } from "./i18n";


// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en: typeof en;
    ar: typeof ar;
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en';
    // custom resources type
    resources: {
      en: typeof en;
      ar: typeof ar;
    };
  };
};



// // new


// // react-i18next versions lower than 11.11.0
// declare module 'react-i18next' {
//   type DefaultResources = typeof resources['en'];
//   interface Resources extends DefaultResources {}
// }

// // react-i18next versions higher than 11.11.0
// declare module 'react-i18next' {
//   interface CustomTypeOptions {
//     defaultNS: typeof defaultNS;
//     resources: typeof resources['en'];
//   };
// };