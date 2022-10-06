package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayToyPageLocators {
	
	//Validate Toy text box
		@FindBy(xpath="//h1[contains(text(),'Toys & Hobbies')]")
		public WebElement txtToys;

}
