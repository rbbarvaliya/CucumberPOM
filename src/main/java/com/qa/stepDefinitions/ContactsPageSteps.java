package com.qa.stepDefinitions;




import com.qa.pages.ContactsPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import com.qa.util.TestUtil;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class ContactsPageSteps extends TestBase {
	
	LoginPage loginPage;
	HomePage homePage;
	TestUtil testUtil;
	ContactsPage contactsPage;
	
	String sheetName = "contacts";
	
	@Given("^user clicks on contacts$")
	public void user_clicks_on_contacts() throws Throwable {
		
		TestBase.initialization();
		testUtil = new TestUtil();
		contactsPage = new ContactsPage();
		loginPage = new LoginPage();
		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
		contactsPage = homePage.clickOnContactsLink();
	}

	@Then("^validate contacts page title$")
	public void validate_contacts_page_title() throws Throwable {
		Assert.assertTrue(contactsPage.verifyContctsLabel());
	}

	@Then("^validate single contact selection$")
	public void validate_single_contact_selection() throws Throwable {
		contactsPage.selectContactsByName("def 456");
	}
	
	@Then("^user closes browser for cntactspage$")
	public void user_closes_browser_for_cntactspage() throws Throwable {
	    driver.quit();
	}

	
}
