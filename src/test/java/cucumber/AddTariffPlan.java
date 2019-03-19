package cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddTariffPlan {
	
	@Given("The user is in add tariff plan page")
	public void the_user_is_in_add_tariff_plan_page() {
		BaseClass base = new BaseClass();
		base.openBrowser();
		base.enterUrl("http://demo.guru99.com/telecom/addtariffplans.php");	
	}

	@When("The user fill all tariff plan details {string},{string},{string},{string},{string},{string},{string}")
	public void the_user_fill_all_tariff_plan_details(String rental1, String local_minutes, String inter_minutes,
			String sms_pack, String minutes_charges, String inter_charges, String sms_charges) {
		AddTariffPage at = new AddTariffPage();
		at.getMonthlyRental().sendKeys(rental1);
		at.getFreeLocalMins().sendKeys(local_minutes);
		at.getFreeIntMins().sendKeys(inter_minutes);
		at.getFreeSMSpack().sendKeys(sms_pack);
		at.getLocalperminchar().sendKeys(minutes_charges);
		at.getInterpermincharges().sendKeys(inter_charges);
		at.getSmsPercharge().sendKeys(sms_charges);
	}

	@When("The user clicks the submit button tariff")
	public void the_user_clicks_the_submit_button_tariff() {
		AddTariffPage at = new AddTariffPage();
		at.getBtnsubmit().click();
	}

	@Then("The user should see the message you add tariff plan")
	public void the_user_should_see_the_message_you_add_tariff_plan() {
		AddTariffSuccessPage as = new AddTariffSuccessPage();
		Assert.assertEquals("Congratulation you add Tariff Plan", as.getSuccessmessage().getText());
	}

}
