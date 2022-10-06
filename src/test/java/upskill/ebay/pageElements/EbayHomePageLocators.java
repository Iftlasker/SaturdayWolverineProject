package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomePageLocators {
	
	//Search Text Box
	@FindBy(xpath="//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;
	
	//Search Button
	@FindBy(xpath="//input[@value='Search']")
	public WebElement btnSearch;
	
	//Search All Categories
	@FindBy(xpath="//select[@aria-label='Select a category for search']")
	public WebElement ctgSearch;
	
	//Search Book Category
	@FindBy(xpath="//option[contains(text(),'Books')]")
	public WebElement bookSearch;
	
	//Search Electronics Link
	@FindBy(linkText="Electronics")
	public WebElement ElectronicSearch;
	
	//Search Toy Link
	@FindBy(linkText="Toys")
	public WebElement ToySearch;
	
	

}
