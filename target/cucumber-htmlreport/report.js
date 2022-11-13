$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrand.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search by Specific Brands",
  "description": "",
  "id": "ebay-search-by-specific-brands",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3663610201,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-by-specific-brands;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Filters By Brand",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have only shoes related Brand products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 257013100,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_shoes()"
});
formatter.result({
  "duration": 4626921900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 785061800,
  "status": "passed"
});
formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\r\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2720354900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 863700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4669992299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 2352263900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 329521599,
  "status": "passed"
});
formatter.after({
  "duration": 814038199,
  "status": "passed"
});
formatter.before({
  "duration": 2648556600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 311800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 6011642200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 3610199100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 158280500,
  "status": "passed"
});
formatter.after({
  "duration": 912627800,
  "status": "passed"
});
formatter.before({
  "duration": 2816198900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 320399,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4157138900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 2955378600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 303483000,
  "status": "passed"
});
formatter.after({
  "duration": 4899051400,
  "status": "passed"
});
formatter.uri("EbayCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "\r\nDescription: User should able to add items in cart",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.before({
  "duration": 3105143000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 363000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Search for Shirt",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select the first shirt on item list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Add to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Shirt()"
});
formatter.result({
  "duration": 4540972000,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_first_shirt_on_item_list()"
});
formatter.result({
  "duration": 86385599,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Big \u0026 Tall Cotton Tee. Sizes 4 XLT to 8XLT. With \u0026 without pockets. MADE IN USA\u0027)]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\limon\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64766}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cbb1019aaae1eedda679b5fd2bdd6958\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Big \u0026 Tall Cotton Tee. Sizes 4 XLT to 8XLT. With \u0026 without pockets. MADE IN USA\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.selectBigTallTee(EbaySearchResultActions.java:104)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.select_the_first_shirt_on_item_list(EbaySearchResultSteps.java:59)\r\n\tat ✽.When Select the first shirt on item list(EbayCartDropDown.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayCartDropDownSteps.select_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartDropDownSteps.select_Men_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartDropDownSteps.select_Shade()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartDropDownSteps.select_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayCartDropDownSteps.add_to_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1575522300,
  "status": "passed"
});
formatter.uri("EbayCountryOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay CountryOutline",
  "description": "\nDescription: User should able to find items by country",
  "id": "ebay-countryoutline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-countryoutline;filter-items-by-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should from \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-countryoutline;filter-items-by-country;",
  "rows": [
    {
      "cells": [
        "Items",
        "Country"
      ],
      "line": 15,
      "id": "ebay-countryoutline;filter-items-by-country;;1"
    },
    {
      "cells": [
        "Shoes",
        "China"
      ],
      "line": 16,
      "id": "ebay-countryoutline;filter-items-by-country;;2"
    },
    {
      "cells": [
        "Shirts",
        "Bangladesh"
      ],
      "line": 17,
      "id": "ebay-countryoutline;filter-items-by-country;;3"
    },
    {
      "cells": [
        "Pants",
        "United States"
      ],
      "line": 18,
      "id": "ebay-countryoutline;filter-items-by-country;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3264955900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 384200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-countryoutline;filter-items-by-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should from \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4592410999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 6594033800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_from(String)"
});
formatter.result({
  "duration": 4083298299,
  "status": "passed"
});
formatter.after({
  "duration": 37950977500,
  "status": "passed"
});
formatter.before({
  "duration": 2927669999,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 473200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-countryoutline;filter-items-by-country;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should from \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 5836189000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 6945129601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_from(String)"
});
formatter.result({
  "duration": 4071435800,
  "status": "passed"
});
formatter.after({
  "duration": 8133526300,
  "status": "passed"
});
formatter.before({
  "duration": 3040462599,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 459899,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-countryoutline;filter-items-by-country;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should from \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 3472026800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 6415814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_from(String)"
});
formatter.result({
  "duration": 4069574600,
  "status": "passed"
});
formatter.after({
  "duration": 30340675600,
  "status": "passed"
});
formatter.uri("EbaySearchByCategories.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search By Categories",
  "description": "",
  "id": "ebay-search-by-categories",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2881877400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search By Categories",
  "description": "",
  "id": "ebay-search-by-categories;search-by-categories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select All Categories",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select Books \u0026 Magazines from All Categories",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Item list should have only Books \u0026 Magazines",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 323300,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.select_All_Categories()"
});
formatter.result({
  "duration": 303655999,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.select_Books_Magazines_from_All_Categories()"
});
formatter.result({
  "duration": 656301300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//option[contains(text(),\u0027Books3434\u0027)]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\limon\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65159}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a105cef922a87c0d2ffb7263a5e4346b\n*** Element info: {Using\u003dxpath, value\u003d//option[contains(text(),\u0027Books3434\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbayHomePageActions.searchBooks(EbayHomePageActions.java:46)\r\n\tat upskill.ebay.stepDef.EbayHomePageSteps.select_Books_Magazines_from_All_Categories(EbayHomePageSteps.java:30)\r\n\tat ✽.And Select Books \u0026 Magazines from All Categories(EbaySearchByCategories.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Books_Magazines()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1280402599,
  "status": "passed"
});
formatter.uri("EbaySearchPants.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2663657000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Pants",
  "description": "",
  "id": "ebay-search-functionality;search-for-pants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for pants",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only pants related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 334900,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_pants()"
});
formatter.result({
  "duration": 3866634400,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_pants_related_products()"
});
formatter.result({
  "duration": 8182104999,
  "status": "passed"
});
formatter.after({
  "duration": 2159414700,
  "status": "passed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2607594300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 390101,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_shoes()"
});
formatter.result({
  "duration": 4671012199,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 8172191799,
  "status": "passed"
});
formatter.after({
  "duration": 27124907300,
  "status": "passed"
});
formatter.uri("EbaySummaryMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2876537599,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summary-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 284800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 5307395400,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 4275380400,
  "status": "passed"
});
formatter.after({
  "duration": 32740238200,
  "status": "passed"
});
formatter.uri("EbayViewElectronics.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay view all Electronic products",
  "description": "",
  "id": "ebay-view-all-electronic-products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2559686299,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "View Electronics",
  "description": "",
  "id": "ebay-view-all-electronic-products;view-electronics",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on electronics",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only electronics related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 266901,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_electronics()"
});
formatter.result({
  "duration": 382315500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Electronics44444\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LENOVO-PC\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\limon\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49172}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e238021e077c3a72f12a6d358dfdf1a\n*** Element info: {Using\u003dlink text, value\u003dElectronics44444}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbayHomePageActions.searchElectronics(EbayHomePageActions.java:51)\r\n\tat upskill.ebay.stepDef.EbayHomePageSteps.click_on_electronics(EbayHomePageSteps.java:35)\r\n\tat ✽.When click on electronics(EbayViewElectronics.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayElectronicPageSteps.item_list_should_have_only_electronics_related_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2270349400,
  "status": "passed"
});
formatter.uri("EbayViewToys.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay view all Toys",
  "description": "",
  "id": "ebay-view-all-toys",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2513916000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "View Toy",
  "description": "",
  "id": "ebay-view-all-toys;view-toy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on Toys",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Toy related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 240600,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Toys()"
});
formatter.result({
  "duration": 2938690399,
  "status": "passed"
});
formatter.match({
  "location": "EbayToyPageSteps.item_list_should_have_only_Toy_related_products()"
});
formatter.result({
  "duration": 8143364900,
  "status": "passed"
});
formatter.after({
  "duration": 15116293400,
  "status": "passed"
});
formatter.uri("EmployeeAPITesting.feature");
formatter.feature({
  "line": 2,
  "name": "App user should able to create, update, get and delete employee details",
  "description": "",
  "id": "app-user-should-able-to-create,-update,-get-and-delete-employee-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@apitesting"
    }
  ]
});
formatter.before({
  "duration": 2865484300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Upskill multiple employee records",
  "description": "",
  "id": "app-user-should-able-to-create,-update,-get-and-delete-employee-details;upskill-multiple-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tGiven Create new employee record"
    },
    {
      "line": 7,
      "value": "#\tAnd Update employee record"
    },
    {
      "line": 8,
      "value": "#\tWhen Get all employee data"
    }
  ],
  "line": 9,
  "name": "Get single employee data by id",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeRestAssuredSteps.get_single_employee_data_by_id()"
});
formatter.result({
  "duration": 5425211800,
  "status": "passed"
});
formatter.after({
  "duration": 2366478999,
  "status": "passed"
});
formatter.uri("Shettyiframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-20"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 2965523000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageSteps.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 8699018700,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 72516699,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 5071008701,
  "status": "passed"
});
formatter.after({
  "duration": 41767617999,
  "status": "passed"
});
});