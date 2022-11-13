package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import upskill.ebay.pageElements.EbayDropDownLocators;
import upskill.utilities.SetupDrivers;

public class EbayDropDownActions {
	
	EbayDropDownLocators EbayDropDownLocatorsobj;

	public EbayDropDownActions(){
		EbayDropDownLocatorsobj = new EbayDropDownLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayDropDownLocatorsobj);
	}
	
	public void switchNewWindow(){
		for (String winhandle: SetupDrivers.driver.getWindowHandles()){
		SetupDrivers.driver.switchTo().window(winhandle);
		}
	}
	
	public void selectSize() throws Exception{
		Select dropDown = new Select(EbayDropDownLocatorsobj.DDSizeType);  // dropdown obj create   
		dropDown.selectByVisibleText("Big & Tall");
		Thread.sleep(2000);
		
	}
	
	public void menSize() throws Exception{
		Select dropDown = new Select(EbayDropDownLocatorsobj.DDSizeMens);  // dropdown obj create   
		dropDown.selectByVisibleText("4XLT");
		Thread.sleep(2000);
	}
	
	public void selectShade() throws Exception{
		Select dropDown = new Select(EbayDropDownLocatorsobj.DDShade);  // dropdown obj create   
		dropDown.selectByVisibleText("Black");
		Thread.sleep(2000);
	}

	public void selectQuantity() throws Exception{
		EbayDropDownLocatorsobj.DDQuantity.clear();
		EbayDropDownLocatorsobj.DDQuantity.sendKeys("2");
		Thread.sleep(2000);
	}

	public void addToCart() throws Exception{
		EbayDropDownLocatorsobj.btnAddToCart.click();
		Thread.sleep(2000);
	}
	
}
