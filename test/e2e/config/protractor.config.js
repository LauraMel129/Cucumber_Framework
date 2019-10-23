"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;
const reporter = require('cucumber-html-reporter');
const junitCucumberReporter = require('cucumber-junit-convert')

const reporterOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../../../reports/report.json'),
    output: path.join(__dirname, '../../../reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true
};

const jUnitOptions = {
    inputJsonFile: path.join(__dirname, '../../../reports/report.json'),
    outputXmlFile: path.join(__dirname, '../../../reports/junit_report.xml')
};

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 2,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tag || '@epam'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        return browser.manage().window().setSize(1500, 1000);
    },
    afterLaunch: () => {
        junitCucumberReporter.convert(jUnitOptions);
        return reporter.generate(reporterOptions);
    }
};