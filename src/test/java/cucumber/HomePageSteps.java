package cucumber;

import cucumber.api.java.en.Given;
import objectRepository.HomePage;

public class HomePageSteps extends BaseClass {

	@Given("The user is in add customer page")
	public void the_user_is_in_add_customer_page() {
		HomePage home = new HomePage();
		click(home.getLnk_addCustomer());
	}
}
