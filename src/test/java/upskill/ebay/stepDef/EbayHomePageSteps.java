package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayHomePageActions;

public class EbayHomePageSteps {
	
	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();

	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {
		//calling from setup driver
	}

	@When("^Search for shoes$")
	public void search_for_shoes() throws Throwable {
		EbayHomePageActionsObj.searchShoes();
		//EbayHomePageActionsObj.searchShoesFromExcel();;
	}
	
	@When("^Select All Categories$")
	public void select_All_Categories() throws Throwable {
		EbayHomePageActionsObj.searchAllcategories();
	}
	
	@When("^Select Books & Magazines from All Categories$")
	public void select_Books_Magazines_from_All_Categories() throws Throwable {
		EbayHomePageActionsObj.searchBooks();
	}
	
	@When("^click on electronics$")
	public void click_on_electronics() throws Throwable {
		EbayHomePageActionsObj.searchElectronics();
	    
	}
	
	@When("^click on Toys$")
	public void click_on_Toys() throws Throwable {
		EbayHomePageActionsObj.searchToys(); 
		
	}
	
	@When("^Search for pants$")
	public void search_for_pants() throws Throwable {
		EbayHomePageActionsObj.searchPants();
	}
	
	@Given("^Search for \"([^\"]*)\"$")
	public void search_for(String items) throws Throwable {
		EbayHomePageActionsObj.searchItems(items);
	}
	
	@Given("^Search for Shirt$")
	public void search_for_Shirt() throws Throwable {
		EbayHomePageActionsObj.searchBigTallTee();
	}
	
	@When("^Mouse Hover to MyEbay Summary$")
	public void mouse_Hover_to_MyEbay_Summary() throws Throwable {
		EbayHomePageActionsObj.mouseHoverMyEbay();
	}

	@Then("^Click on Summary$")
	public void click_on_Summary() throws Throwable {
		EbayHomePageActionsObj.clickSummary();
	}
	
	
	
	
}
