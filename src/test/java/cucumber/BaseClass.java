package cucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	
	static WebDriver driver;
	
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Ramesh Aravind\\eclipse-TestNG\\CucumberRamesh\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	// Closing Browser
	public void quitBrowser() {
		driver.quit();
	}

	// Close Window
	public void closeWindow() {
		driver.close();
	}

	// Enter URL
	public void enterUrl(String url) {
		driver.get(url);
	}

	// Get PageTitle
	public String getPageTitle() {
		String title = driver.getTitle();
		return title;
	}

	// Get Url
	public String getCurrentUrl() {
		String url = driver.getCurrentUrl();
		return url;
	}


}
