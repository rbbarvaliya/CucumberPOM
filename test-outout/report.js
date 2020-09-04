$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/qa/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Contacts Page Test",
  "description": "",
  "id": "free-crm-application-contacts-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Contacts Page Test",
  "description": "",
  "id": "free-crm-application-contacts-page-test;validate-free-crm-contacts-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user clicks on contacts",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "validate contacts page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate single contact selection",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user closes browser for cntactspage",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsPageSteps.user_clicks_on_contacts()"
});
formatter.result({
  "duration": 10037346100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.validate_contacts_page_title()"
});
formatter.result({
  "duration": 105008600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.validate_single_contact_selection()"
});
formatter.result({
  "duration": 364182100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsPageSteps.user_closes_browser_for_cntactspage()"
});
formatter.result({
  "duration": 750593000,
  "status": "passed"
});
formatter.uri("src/main/java/com/qa/features/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Home Page Test",
  "description": "",
  "id": "free-crm-application-home-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-home-page-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 7103502800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 28204300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_app()"
});
formatter.result({
  "duration": 330052700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 5940900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 1542663300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_closes_browser()"
});
formatter.result({
  "duration": 698757900,
  "status": "passed"
});
});