package cucumber;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddTariffPage {
	
	public AddTariffPage() {
		PageFactory.initElements(BaseClass.driver, this);		
	}
	
	@FindBy(id="rental1")
	private WebElement monthlyRental;
	
	@FindBy(id="local_minutes")
	private WebElement freeLocalMins;
	
	@FindBy(id="inter_minutes")
	private WebElement freeIntMins;
	
	@FindBy(id="sms_pack")
	private WebElement freeSMSpack;
	
	@FindBy(id="minutes_charges")
	private WebElement localperminchar;
	
	@FindBy(id="inter_charges")
	private WebElement interpermincharges;
	
	@FindBy(id="sms_charges")
	private WebElement smsPercharge;
	
	@FindBy(name="submit")
	private WebElement btnsubmit;
	
	@FindBy(xpath="//input[@type='reset']")
	private WebElement butreset;

	public WebElement getMonthlyRental() {
		return monthlyRental;
	}

	public void setMonthlyRental(WebElement monthlyRental) {
		this.monthlyRental = monthlyRental;
	}

	public WebElement getFreeLocalMins() {
		return freeLocalMins;
	}

	public void setFreeLocalMins(WebElement freeLocalMins) {
		this.freeLocalMins = freeLocalMins;
	}

	public WebElement getFreeIntMins() {
		return freeIntMins;
	}

	public void setFreeIntMins(WebElement freeIntMins) {
		this.freeIntMins = freeIntMins;
	}

	public WebElement getFreeSMSpack() {
		return freeSMSpack;
	}

	public void setFreeSMSpack(WebElement freeSMSpack) {
		this.freeSMSpack = freeSMSpack;
	}

	public WebElement getLocalperminchar() {
		return localperminchar;
	}

	public void setLocalperminchar(WebElement localperminchar) {
		this.localperminchar = localperminchar;
	}

	public WebElement getInterpermincharges() {
		return interpermincharges;
	}

	public void setInterpermincharges(WebElement interpermincharges) {
		this.interpermincharges = interpermincharges;
	}

	public WebElement getSmsPercharge() {
		return smsPercharge;
	}

	public void setSmsPercharge(WebElement smsPercharge) {
		this.smsPercharge = smsPercharge;
	}

	public WebElement getBtnsubmit() {
		return btnsubmit;
	}

	public void setBtnsubmit(WebElement btnsubmit) {
		this.btnsubmit = btnsubmit;
	}

	public WebElement getButreset() {
		return butreset;
	}

	public void setButreset(WebElement butreset) {
		this.butreset = butreset;
	}

}
