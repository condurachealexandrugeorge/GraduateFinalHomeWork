$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/allScenario/adminSteps.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I make a call to create OWNER_ADMIN",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I have access to the petclinicSecured as an admin with credentials \"admin\",\"admin\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I make a call to \"/api/users\" for create OWNER_ADMIN, VET_ADMIN with:  \"\u003cadminRoles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I get status code 201",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "adminRoles"
      ]
    },
    {
      "cells": [
        "OWNER_ADMIN"
      ]
    },
    {
      "cells": [
        "VET_ADMIN"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I make a call to create OWNER_ADMIN",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have access to the petclinicSecured as an admin with credentials \"admin\",\"admin\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iHaveAccessToThePetclinicSecuredAsAnAdminWithCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a call to \"/api/users\" for create OWNER_ADMIN, VET_ADMIN with:  \"OWNER_ADMIN\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iMakeACallToForCreateOWNER_ADMINVET_ADMINWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:470)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:632)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:121)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:129)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat stepsDef.CreateAdminSteps.iGetStatusCode(CreateAdminSteps.java:73)\r\n\tat ✽.I get status code 201(src/test/java/allScenario/adminSteps.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "I make a call to create OWNER_ADMIN",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have access to the petclinicSecured as an admin with credentials \"admin\",\"admin\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iHaveAccessToThePetclinicSecuredAsAnAdminWithCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make a call to \"/api/users\" for create OWNER_ADMIN, VET_ADMIN with:  \"VET_ADMIN\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iMakeACallToForCreateOWNER_ADMINVET_ADMINWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:470)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:632)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:121)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:129)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat stepsDef.CreateAdminSteps.iGetStatusCode(CreateAdminSteps.java:73)\r\n\tat ✽.I get status code 201(src/test/java/allScenario/adminSteps.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecured()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the credentials \"admin\",\"admin\" for authentication",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iEnterTheCredentialsForAuthentication(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I make a call to verify authentication as an owner_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I try to access petclinicSecured as \"OWNER_ADMIN\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I access the pages: \"\u003cpages\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pages"
      ]
    },
    {
      "cells": [
        "/api/owners"
      ]
    },
    {
      "cells": [
        "/api/pets"
      ]
    },
    {
      "cells": [
        "/api/pettypes"
      ]
    },
    {
      "cells": [
        "/api/visits"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I make a call to verify authentication as an owner_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"OWNER_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/owners\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/owners\"(src/test/java/allScenario/adminSteps.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an owner_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"OWNER_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/pets\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/pets\"(src/test/java/allScenario/adminSteps.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an owner_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"OWNER_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/pettypes\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/pettypes\"(src/test/java/allScenario/adminSteps.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an owner_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"OWNER_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/visits\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/visits\"(src/test/java/allScenario/adminSteps.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "I make a call to verify authentication as an vet_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I try to access petclinicSecured as \"VET_ADMIN\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I access the pages: \"\u003cpages\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pages"
      ]
    },
    {
      "cells": [
        "/api/specialties"
      ]
    },
    {
      "cells": [
        "/api/pets"
      ]
    },
    {
      "cells": [
        "/api/pettypes"
      ]
    },
    {
      "cells": [
        "/api/vets"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I make a call to verify authentication as an vet_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"VET_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/specialties\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/specialties\"(src/test/java/allScenario/adminSteps.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an vet_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"VET_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/pets\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/pets\"(src/test/java/allScenario/adminSteps.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an vet_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"VET_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/pettypes\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/pettypes\"(src/test/java/allScenario/adminSteps.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify authentication as an vet_admin",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access petclinicSecured as \"VET_ADMIN\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessPetclinicSecuredAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I access the pages: \"/api/vets\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iAccessThePages(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iAccessThePages(CreateAdminSteps.java:91)\r\n\tat ✽.I access the pages: \"/api/vets\"(src/test/java/allScenario/adminSteps.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.iGetStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "I make a call to verify post in database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I try to access database for petclinicSecured and get all users",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAdminSteps.iTryToAccessDatabaseForPetclinicSecuredAndGetAllUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the database if the admin has been added",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAdminSteps.iCheckTheDatabaseIfTheAdminHasBeenAdded()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepsDef.CreateAdminSteps.iCheckTheDatabaseIfTheAdminHasBeenAdded(CreateAdminSteps.java:117)\r\n\tat ✽.I check the database if the admin has been added(src/test/java/allScenario/adminSteps.feature:48)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user must exist in the database",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAdminSteps.theUserMustExistInTheDatabase()"
});
formatter.result({
  "status": "skipped"
});
});