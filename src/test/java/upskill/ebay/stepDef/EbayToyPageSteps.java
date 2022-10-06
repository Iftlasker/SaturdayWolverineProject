package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import upskill.ebay.pageAction.EbayToyPageActions;

public class EbayToyPageSteps {
	
EbayToyPageActions EbayToyPageActionsObj = new EbayToyPageActions();


	@Then("^Item list should have only Toy related products$")
	public void item_list_should_have_only_Toy_related_products() throws Throwable {
		Thread.sleep(5000);
		EbayToyPageActionsObj.verifyToyItems();
		Thread.sleep(3000);
	}


}
