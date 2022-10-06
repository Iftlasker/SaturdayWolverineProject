package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import upskill.ebay.pageAction.EbayElectronicPageActions;

public class EbayElectronicPageSteps {
	
	EbayElectronicPageActions EbayElectronicPageActionsObj = new EbayElectronicPageActions();
	
	@Then("^Item list should have only electronics related products$")
	public void item_list_should_have_only_electronics_related_products() throws Throwable {
		Thread.sleep(3000);
		EbayElectronicPageActionsObj.verifyElectronicItems();
		Thread.sleep(2000);
	}

}
