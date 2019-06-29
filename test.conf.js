let chai = require("chai");
exports.config = {

    // Test Scripts
    specs: [
        "./src/test_scripts/TC_001_Login.js",
        "./src/test_scripts/TC_002_Login_wrong_username.js",
        "./src/test_scripts/TC_003_Login_wrong_password.js"
    ],
    suites: {
        api_learning: [
            "./src/api_learning/alertHandle.js",
            "./src/api_learning/click.js"
        ],
        login_function: [
            "./src/test_scripts/TC_001_Login.js",
            "./src/test_scripts/TC_002_Login_wrong_username.js",
            "./src/test_scripts/TC_003_Login_wrong_password.js" 
        ]
    },
    maxInstances: 2,
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',
    baseUrl: "http://the-internet.herokuapp.com",

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],
    before: () => {
        global.expect = chai.expect;
    }
}