import { expect as _expect } from 'chai';
var expect = _expect;

import BasePage from './basePage';

function CareersPage() {
    this.clickCareers = function () {
        var self = this;
        return self.careersLink.click()
    }
    this.getTitle = function (done) {
        browser.get('https://www.epam.com/careers')
            .then(() => expect(browser.getTitle()).toEqual('Explore Professional Growth Opportunities | EPAM Careers'))
            .finally(done);
    };
    this.pageIsLoaded = function (done) {
        browser.wait(EC.visibilityOf(epamLogo))
            .then(() => browser.wait(EC.visibilityOf(jobForm)))
            .then(() => {
                expect(epamLogo.isDisplayed).toBeTruthy();
                expect(jobForm.isDisplayed).toBeTruthy();
            })
            .finally(done);
    };
    this.allowSearchJob = function (done) {
        jobID.sendKeys("QA Automation Engineer")
            .then(() => location.click())
            .then(() => browser.wait(EC.visibilityOf(locationList)))
            .then(() => allLocations.click())
            .then(() => skills.click())
            .then(() => browser.wait(EC.visibilityOf(skillsList)))
            .then(() => skillQA.click())
            .then(() => findButton.click())
            .then(() => browser.wait(EC.visibilityOf(foundJobsLabel)))
            .then(() => foundJobs.count())
            .then((count) => {
                if (count < 1) {
                    expect(foundJobsLabel.getText()).toBe(`Sorry, your search returned no results. Please try another combination.`);
                } else if (count === 1) {
                    expect(foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENING RELATED TO "QA AUTOMATION ENGINEER"`);
                } else {
                    expect(foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENINGS RELATED TO "QA AUTOMATION ENGINEER"`);
                }
            })
            .finally(done);
    }
};

CareersPage.prototype = BasePage;
export default new CareersPage();