#Author: Ramesh

@tag
Feature: To test telecom project

  @AddCust
  Scenario: Add Customer
    Given The user is in add customer page
    When The user fill all the customer details
    And The user clicks the submit button
    Then The user should see the success message
    And The user should see the customer ID

  @AddTariff
  Scenario Outline: Add Tariff Plan
    Given The user is in add tariff plan page
    When The user fill all tariff plan details "<rental1>","<local_minutes>","<inter_minutes>","<sms_pack>","<minutes_charges>","<inter_charges>","<sms_charges>"
    And The user clicks the submit button tariff
    Then The user should see the message you add tariff plan

    Examples: 
      | rental1 | local_minutes | inter_minutes | sms_pack | minutes_charges | inter_charges | sms_charges |
      |     100 |           200 |           300 |      400 |             500 |           600 |         700 |
      |     200 |           300 |           303 |      400 |             500 |           600 |         700 |
      |     300 |           400 |           300 |      400 |             500 |           600 |         700 |
      |     400 |           500 |           300 |      400 |             500 |           600 |         700 |
      |     500 |           600 |           400 |      400 |             500 |           600 |         700 |
      |     600 |           700 |           300 |      400 |             500 |           600 |         700 |
