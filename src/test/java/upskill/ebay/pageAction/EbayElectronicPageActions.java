package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.ebay.pageElements.EbayElectronicPageLocators;
import upskill.utilities.SetupDrivers;

public class EbayElectronicPageActions {
	
EbayElectronicPageLocators EbayElectronicPageLocatorsobj;
	
	public EbayElectronicPageActions(){
		EbayElectronicPageLocatorsobj = new EbayElectronicPageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayElectronicPageLocatorsobj);
	}
	
	public void verifyElectronicItems(){
		//Option 1
		EbayElectronicPageLocatorsobj.txtElectronics.isDisplayed();
		
		//Option 2
		Assert.assertEquals("Electronics", EbayElectronicPageLocatorsobj.txtElectronics.getText());
		
		//Option 3
		Assert.assertTrue(EbayElectronicPageLocatorsobj.txtElectronics.isDisplayed());
	}

}
