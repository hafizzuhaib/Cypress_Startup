const { defineConfig } = require('cypress')

module.exports = defineConfig({
  waitForFileChanges: false,
  responseTimeout: 60000,
  screenshotOnRunFailure: false,
  video: false,
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
      })
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  },
})
