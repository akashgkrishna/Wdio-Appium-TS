exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'elastictest_IEsUKn',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '96tSpGcY9aYpcdQWPuWD',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://aa25b129c9b06533674b464fd7ef540baee887cd',
          // buildIdentifier: "${DATE_TIME}",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, 
  ],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sauce Labs App",
        buildName: "bstack-sauceLabs",
        debug: true,
        // networkLogs: true
      }
    },
    maxInstances: 1,
    specs: [
      '/Users/testvagrant/Documents/Krishna/WDIO/TS_PRAC_WDIO/test/spec/logout/positiveLogout.test.ts'
  ],
  logLevel: 'info',
}