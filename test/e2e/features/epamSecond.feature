@all
Feature: Navigation to Careers page and Search

    @epam
    Scenario: Careers page functionalities
        When "Career" should be visible
        And Text of "Career Button" should contain "CAREERS"
        Then I click "Career Button"
        And Count of "Nav Bar item" should be "5"
        And Page title should be "Explore Professional Growth Opportunities | EPAM Careers"
        And "jobID" should be visible
        When I fill "test" in "jobID" field
        Then "Dropdown" should be visible
        And I click "Find button"
        And I wait "2" seconds
        Then "Apply button" should be visible
        And I clear value in "jobID"

    @epam
    Scenario Outline:  I should be able to search different texts
        When I fill "<text>" in "jobID" field
        Then "<element>" should be visible
        And I click "Find button"
        And I wait "2" seconds
        Then "Apply button" should be visible
        And I clear value in "jobID"

        Examples:
            | text      | element     |
            | job       | Dropdown    |
            | test      | Location    |
            | developer | Skills      |
            | QA        | Find button |