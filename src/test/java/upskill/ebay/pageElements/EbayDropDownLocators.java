package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayDropDownLocators {
	
		
	
	//Search for Size Type
	@FindBy(xpath="//select[@id='msku-sel-1']")
	public WebElement DDSizeType;
	

	//Search for Size Mens
	@FindBy(xpath="//select[@id='msku-sel-2']")
	public WebElement DDSizeMens;
	
	//Search for Shade
	@FindBy(xpath="//select[@id='msku-sel-3']")
	public WebElement DDShade;
	
	//Search for Quantity
	@FindBy(xpath="//input[@id='qtyTextBox']")
	public WebElement DDQuantity;
	
	//Search for Add to Cart
	@FindBy(xpath="//a[@id='atcRedesignId_btn']")
	public WebElement btnAddToCart;
	
}
