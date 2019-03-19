$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ramesh Aravind/eclipse-TestNG/cucumber/src/test/resources/Features/TelecomProject.feature");
formatter.feature({
  "name": "To test telecom project",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddCust"
    }
  ]
});
formatter.step({
  "name": "The user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all the customer details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.the_user_fill_all_the_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer ID",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.the_user_should_see_the_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fill all tariff plan details \"\u003crental1\u003e\",\"\u003clocal_minutes\u003e\",\"\u003cinter_minutes\u003e\",\"\u003csms_pack\u003e\",\"\u003cminutes_charges\u003e\",\"\u003cinter_charges\u003e\",\"\u003csms_charges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rental1",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "303",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "300",
        "400",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "400",
        "500",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "500",
        "600",
        "400",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "600",
        "700",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"200\",\"300\",\"303\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"300\",\"400\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"400\",\"500\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"500\",\"600\",\"400\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@AddTariff"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill all tariff plan details \"600\",\"700\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_clicks_the_submit_button_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the message you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_message_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
});