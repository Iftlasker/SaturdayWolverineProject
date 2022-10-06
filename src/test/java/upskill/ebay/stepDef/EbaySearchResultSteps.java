package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbaySearchResultActions;

public class EbaySearchResultSteps {
	
	EbaySearchResultActions EbaySearchResultActionsObj = new EbaySearchResultActions();
	
	@Then("^Item list should have only shoes related products$")
	public void item_list_should_have_only_shoes_related_products() throws Throwable {
		Thread.sleep(5000);
		EbaySearchResultActionsObj.verifyShoesItems();
		Thread.sleep(3000);
	}
	
	@Then("^Item list should have only Books & Magazines$")
	public void item_list_should_have_only_Books_Magazines() throws Throwable {
		Thread.sleep(5000);
		EbaySearchResultActionsObj.verifyBooksItems();
		Thread.sleep(3000);
	    
	}
	
	@Then("^Item list should have only pants related products$")
	public void item_list_should_have_only_pants_related_products() throws Throwable {
		Thread.sleep(5000);
		EbaySearchResultActionsObj.verifyPantsItems();;
		Thread.sleep(3000);
	}
	
	@When("^Filter by \"([^\"]*)\"$")
	public void filter_by(String brand) throws Throwable {
		EbaySearchResultActionsObj.filterBrand(brand);
	}

	@Then("^Item list should have products of \"([^\"]*)\"$")
	public void item_list_should_have_products_of(String brand) throws Throwable {
		EbaySearchResultActionsObj.VerifyBrandItems(brand);
	}
	
	@When("^Region of Manufacture \"([^\"]*)\"$")
	public void region_of_Manufacture(String country) throws Throwable {
		Thread.sleep(2000);
		EbaySearchResultActionsObj.filterCountry(country);
		Thread.sleep(2000);
	}
	
	@Then("^Item list should from \"([^\"]*)\"$")
	public void item_list_should_from(String country) throws Throwable {
		Thread.sleep(2000);
		EbaySearchResultActionsObj.VerifyCountryItems(country);
		Thread.sleep(2000);
	}
	
	
	

}