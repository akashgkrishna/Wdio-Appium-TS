exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'elastic_ud0MjL',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'VVPVCyumxmDCk8dxzVTW',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://4060025275a54d85a1e3081b3e24e5b972cede67',
          browserstackLocal: false
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'iPhone 14 Pro Max',
        platformVersion: '16',
        platformName: 'ios',
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
      'test/spec/logout/positiveLogout.test.ts'
  ],
  logLevel: 'info',
  reporters: [
    ['allure', {
        outputDir: 'allure-results',
        disableMochaHooks: true // Disable hooks 
    }],
 ],
}