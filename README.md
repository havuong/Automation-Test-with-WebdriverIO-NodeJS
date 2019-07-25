# Automation Test with WebdriverIO using NodeJS


## What is WebdriverIO
[WebdriverIO](https://webdriver.io) is a test automation framework that allows you to run tests based on the Webdriver protocol and Appium automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack or TestingBot.

## Test framework: 
Mocha
```
npm install @wdio/mocha-framework --save-dev
```

## Other dependencies

- [@wdio/cli](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-cli) - A WebdriverIO testrunner command line interface
- [@wdio/local-runner](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-local-runner) - A WebdriverIO runner to run tests locally
- [@wdio/junit-reporter](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-junit-reporter) - A WebdriverIO reporter that creates test results in XML format
- [@wdio/spec-reporter](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-spec-reporter) - A WebdriverIO plugin to report in spec style
- [@wdio/sync](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-sync) - A WebdriverIO plugin. Helper module to run WebdriverIO commands synchronously
