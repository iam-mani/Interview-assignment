const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 4000,
  video: true,
  reporter: 'mochawesome',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
  },
  testingType: 'e2e',
  e2e: {
    specPattern: 'cypress/integration/*.spec.js'
  }
  
  
  
  
})
