package objectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.BaseClass;

public class AddCustomerPage {

	public AddCustomerPage() {
		PageFactory.initElements(BaseClass.driver, this);
	}

	@FindBy(id = "fname")
	private WebElement txtfname;
	@FindBy(id = "lname")
	private WebElement txtlname;
	@FindBy(id = "email")
	private WebElement txtemail;
	@FindBy(name = "addr")
	private WebElement txtaddr;
	@FindBy(id = "telephoneno")
	private WebElement txttelephoneno;
	@FindBy(name = "submit")
	private WebElement btnsubmit;
	@FindBy(xpath = "//input[@value=\\\"Reset\\")
	private WebElement btnreset;

	public WebElement getTxtfname() {
		return txtfname;
	}

	public void setTxtfname(WebElement txtfname) {
		this.txtfname = txtfname;
	}

	public WebElement getTxtlname() {
		return txtlname;
	}

	public void setTxtlname(WebElement txtlname) {
		this.txtlname = txtlname;
	}

	public WebElement getTxtemail() {
		return txtemail;
	}

	public void setTxtemail(WebElement txtemail) {
		this.txtemail = txtemail;
	}

	public WebElement getTxtaddr() {
		return txtaddr;
	}

	public void setTxtaddr(WebElement txtaddr) {
		this.txtaddr = txtaddr;
	}

	public WebElement getTxttelephoneno() {
		return txttelephoneno;
	}

	public void setTxttelephoneno(WebElement txttelephoneno) {
		this.txttelephoneno = txttelephoneno;
	}

	public WebElement getBtnsubmit() {
		return btnsubmit;
	}

	public void setBtnsubmit(WebElement btnsubmit) {
		this.btnsubmit = btnsubmit;
	}

	public WebElement getBtnreset() {
		return btnreset;
	}

	public void setBtnreset(WebElement btnreset) {
		this.btnreset = btnreset;
	}

}
