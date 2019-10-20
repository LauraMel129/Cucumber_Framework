Feature: Basic test

  Scenario: Basic test 1
    Given I am on "home" page
    When I open About page
    Then About title should be displayed
    Then I open Search panel
    And I should see a search panel opened
    Then I should search job


    Scenario: Basic test 2
    Given I am on "home" page
    Then I open Careers page
    Then Careers page should be displayed
      And I submit join form
    Then Home page should be displayed
    When I perform a search of "search" with "Blocker" value
      Then Title should be displayed