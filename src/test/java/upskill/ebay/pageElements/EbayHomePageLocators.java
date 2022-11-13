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
	@FindBy(xpath="//option[contains(text(),'Books3434')]")
	public WebElement bookSearch;
	
	//Search Electronics Link
	@FindBy(linkText="Electronics44444")
	public WebElement ElectronicSearch;
	
	//Search Toy Link
	@FindBy(linkText="Toys")
	public WebElement ToySearch;
	
	//My Ebay Link
	@FindBy(xpath="//a[@title='My eBay']")
	public WebElement linkMyEbay;
	
	//Summary
	@FindBy(xpath="//a[contains(text(),'Summary')]")
	public WebElement linkSummary;
	

}
