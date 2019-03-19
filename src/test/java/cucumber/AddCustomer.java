package cucumber;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddCustomer {

	WebDriver driver;
	
	@Given("The user is in add customer page")
	public void the_user_is_in_add_customer_page() {
		BaseClass base = new BaseClass();
		base.openBrowser();
		base.enterUrl("http://demo.guru99.com/telecom/addcustomer.php");		  
	}

	@When("The user fill all the customer details")
	public void the_user_fill_all_the_customer_details() {
		AddCustomerPage addpage = new AddCustomerPage();
	    addpage.getTxtfname().sendKeys("ramesh");
	    addpage.getTxtlname().sendKeys("k");
	    addpage.getTxtemail().sendKeys("rameshk@gmail.com");
	    addpage.getTxtaddr().sendKeys("chennai");
	    addpage.getTxttelephoneno().sendKeys("9876543210");
	    
	}

	@When("The user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		AddCustomerPage addpage = new AddCustomerPage();
		addpage.getBtnsubmit().click();
	    
	}

	@Then("The user should see the success message")
	public void the_user_should_see_the_success_message() {
		AddCustomerSuccessMessagePage addsuccesspage = new AddCustomerSuccessMessagePage();
		Assert.assertEquals("Please Note Down Your CustomerID",
				addsuccesspage.getcustomeridmesage().getText());
	}

	@Then("The user should see the customer ID")
	public void the_user_should_see_the_customer_ID() {
		AddCustomerSuccessMessagePage addsuccesspage = new AddCustomerSuccessMessagePage();
		Assert.assertTrue(addsuccesspage.getcustomeriddisplayed().isDisplayed());
	}
	
	
	
}
