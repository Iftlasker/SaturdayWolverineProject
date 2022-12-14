package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayDropDownActions;

public class EbayCartDropDownSteps {
	
	EbayDropDownActions EbayDropDownActionsobj = new EbayDropDownActions();
	
	@When("^Select Size$")
	public void select_Size() throws Throwable {
		EbayDropDownActionsobj.switchNewWindow();
		EbayDropDownActionsobj.selectSize();
	}

	@When("^Select Men Size$")
	public void select_Men_Size() throws Throwable {
		EbayDropDownActionsobj.menSize();
	}

	@When("^Select Shade$")
	public void select_Shade() throws Throwable {
		EbayDropDownActionsobj.selectShade();
	}

	@When("^Select Quantity$")
	public void select_Quantity() throws Throwable {
		EbayDropDownActionsobj.selectQuantity();
	}

	@Then("^Add to shopping cart$")
	public void add_to_shopping_cart() throws Throwable {
		EbayDropDownActionsobj.addToCart();
	}
	
	

}
