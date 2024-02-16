exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'elastic_ud0MjL',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'VVPVCyumxmDCk8dxzVTW',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://3f4b2890956a33bdc490b131ce5b09e8eb1ee637',
          browserstackLocal: false
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
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
      '../test/spec/*/*.test.ts'
  ],
  logLevel: 'info',
  reporters: [
    ['allure', {
        outputDir: 'allure-results',
        disableMochaHooks: true // Disable hooks 
    }],
 ],
}