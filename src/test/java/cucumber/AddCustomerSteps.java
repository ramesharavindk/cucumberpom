package cucumber;

import java.util.List;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import objectRepository.AddCustomerPage;

public class AddCustomerSteps extends BaseClass {
	@When("The user fill in the customer details")
	public void the_user_fill_in_the_customer_details(DataTable customerDetails) {
		List<String> customerDetailsList = customerDetails.asList(String.class);
		AddCustomerPage addcust = new AddCustomerPage();
	}

	@When("The user clicks the sumbit button")
	public void the_user_clicks_the_sumbit_button() {
		// Write code here that turns the phrase above into concrete actions
		throw new cucumber.api.PendingException();
	}
}
