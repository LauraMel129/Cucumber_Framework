@all
Feature: Navigation to About page

  @epam
  Scenario: Verify user can open menu
    Given I open "https://www.epam.com/" url
    And Count of "Nav Bar item" should be "6"
    And Page title should be "EPAM | Enterprise Software Development, Design & Consulting"

    When "About" should be visible
    Then I click "About Button"
    And Page title should be "One of the Fastest-Growing Public Tech Companies | About EPAM"
    And I wait "3" seconds
