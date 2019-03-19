package cucumber;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddTariffSuccessPage {
	
	public AddTariffSuccessPage() {
		PageFactory.initElements(BaseClass.driver, this);		
	}
	
	@FindBy(xpath="//h2[contains(text(),'Congratulation you add Tariff Plan')]")
	private WebElement successmessage;
	
	@FindBy(xpath="//ul[@class='actions']//a[contains(text(),'Home']")
	private WebElement hometext;
	
	public WebElement getSuccessmessage() {
		return successmessage;
	}

	public void setSuccessmessage(WebElement successmessage) {
		this.successmessage = successmessage;
	}

	public WebElement getHometext() {
		return hometext;
	}

	public void setHometext(WebElement hometext) {
		this.hometext = hometext;
	}

}
