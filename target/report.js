$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "To test add customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addcust"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user is in add customer page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addcust"
    },
    {
      "name": "@us12"
    },
    {
      "name": "@us21"
    },
    {
      "name": "@us22"
    }
  ]
});
formatter.step({
  "name": "The user fill in the customer details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname",
        "test@gmail.com",
        "chennai",
        "723462348"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname1",
        "test1@gmail.com",
        "chennai",
        "2723462348"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname",
        "test2@gmail.com",
        "chennai",
        "12723462348"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user should see the success message \"Please Note Down Your CustomerID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The user should see the customer ID",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});