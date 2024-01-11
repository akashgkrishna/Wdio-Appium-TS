// import { Logger } from '../test/reporting/logger';
// exports.config = {
//     user: process.env.BROWSERSTACK_USERNAME || 'priyankahs_ESljGO',
//     key: process.env.BROWSERSTACK_ACCESS_KEY || 'qTpfkmcJsugKDHyShJ5t',
//     hostname: 'hub.browserstack.com',
//     services: [
//       [
//         'browserstack',
//         {
//           app: 'bs://557ea258f0c4b9233af2588d4bbfc05dabfa6445',
//           // buildIdentifier: "${DATE_TIME}",
//           browserstackLocal: true
//         },
//       ]
//     ],
//     capabilities: [{
//       'bstack:options': {
//         deviceName: 'Samsung Galaxy S22 Ultra',
//         platformVersion: '12.0',
//         platformName: 'android',
//       }
//     }, 
//   ],
//     commonCapabilities: {
//       'bstack:options': {
//         projectName: "BrowserStack Sauce Labs App",
//         buildName: "bstack-sauceLabs",
//         debug: true,
//         // networkLogs: true
//       }
//     },
//     maxInstances: 1,
//     specs: [
//       '/Users/testvagrant/Documents/Krishna/WDIO/TS_PRAC_WDIO/test/spec/logout/positiveLogout.test.ts'
//   ],
//   logLevel: 'silent',
//   reporters: [
//     Logger
//   ],
// }