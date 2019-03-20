package cucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before
	public static void beformethod() {
		openBrowser();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@After
	public void Aftermethod() {
		closeWindow();
		quitBrowser();
	}

}
