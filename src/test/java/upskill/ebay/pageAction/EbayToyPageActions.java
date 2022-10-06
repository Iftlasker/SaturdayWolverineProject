package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.ebay.pageElements.EbayToyPageLocators;
import upskill.utilities.SetupDrivers;

public class EbayToyPageActions {
		
	EbayToyPageLocators EbayToyPageLocatorsobj;
			
		public EbayToyPageActions(){
			EbayToyPageLocatorsobj = new EbayToyPageLocators();
			PageFactory.initElements(SetupDrivers.driver, EbayToyPageLocatorsobj);
		}
		
		public void verifyToyItems(){
			//Option 1
			EbayToyPageLocatorsobj.txtToys.isDisplayed();
			
			//Option 2
			Assert.assertEquals("Toys & Hobbies", EbayToyPageLocatorsobj.txtToys.getText());
			
			//Option 3
			Assert.assertTrue(EbayToyPageLocatorsobj.txtToys.isDisplayed());
		}

}
