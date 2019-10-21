"use strict";
const { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const highlightElement = require('../utils/stepFunctions.js').highlightElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    logger.info(`I wait ${waitTime} seconds`);
    return browser.sleep(waitTime * 1000);
});

When (/^I wait visibility of "([^"]*)"$/, (elementName) => {
    let element = elementHelper(elementName);
    logger.info(`I wait element '${elementName}' to be visible`);
    return browser.wait(EC.visibilityOf(element), 5000);
});

When(/^I fill "([^"]*)" in "([^"]*)" field/, (keys, field) => {
    logger.info(`I fill "${keys}" in field ${field}`);
    return elementHelper(field).sendKeys(keys);
});

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});

When(/^I highlight "([^"]*)"$/, (alias) => {
    logger.info(`I highlight ${alias}`);
    return highlightElement(alias);
});

When(/^I clear value in "([^"]*)"?$/,(element) => {
        logger.info(`I clear value in ${element}`)
        return elementHelper(element).clear();
    }
);