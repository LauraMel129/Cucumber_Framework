@all
Feature: Menu

  @epam
  Scenario: Verify user can open menu
    Given I open "https://www.epam.com/" url
    And Count of "Nav Bar item" should be "6"
    And Page title should be "EPAM | Enterprise Software Development, Design & Consulting"

    When "About" should be visible
    Then I click "About Button"
    And Page title should be "One of the Fastest-Growing Public Tech Companies | About EPAM"
    And I wait "3" seconds

  @epam
  Scenario: Careers page functionalities
    When "Career" should be visible
    And Text of "Career Button" should contain "CAREERS"
    Then I click "Career Button"
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