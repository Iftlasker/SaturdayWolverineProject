package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySearchResultLocators {


	//Validate Books Items
	@FindBy(xpath="//span[contains(text(),'Books & Magazines')]")
	public WebElement txtBooks;
	
	//Checkbox Brand Adidas
	@FindBy(xpath="//input[@aria-label='adidas']")
	public WebElement cbxBrandAdidas;
	
	//Checkbox Brand Nike
	@FindBy(xpath="//input[@aria-label='Nike']")
	public WebElement cbxBrandNike;
	
	//Checkbox Brand Unbranded
	@FindBy(xpath="//input[@aria-label='Unbranded']")
	public WebElement cbxBrandUnbranded;
	
	//Validate Shoes Items 3333333333333
	@FindBy(xpath="//span[2][contains(text(),'Shoes')]")
	public WebElement txtShoes;
	
	///Validate Shirt Items
	@FindBy(xpath="//span[2][contains(text(),'Shirt')]")
	public WebElement txtShirts;
	
	//Validate Pants text
	@FindBy(xpath="//span[2][contains(text(), 'Pants')]")
	public WebElement txtPants;
	
	
	//Select Country/Region of Manufacture
	@FindBy(xpath="//h3[contains(text(),'Country/Region of Manufacture')]")
	public WebElement selectCountry;
	
	
	//Checkbox Country China
	@FindBy(xpath="//input[@aria-label='China']")
	public WebElement cbxChina;
	
	//Checkbox Country Bangladesh
	@FindBy(xpath="//input[@aria-label='Bangladesh']")
	public WebElement cbxBangladesh;
	
	//Checkbox Country United States
	@FindBy(xpath="//input[@aria-label='United States']")
	public WebElement cbxUSA;
	
	//Validate Country China
	//@FindBy(xpath="//span[contains(text(),'Remove filter')]//parent:: div")
	@FindBy(xpath="//div[contains(text(),'China')]")
	public WebElement cbxValidateChina;
	
	//Validate Country Bangladesh
	@FindBy(xpath="//div[contains(text(),'Bangladesh')]")
	public WebElement cbxValidateBangladesh;
	
	//Validate Country United States
	@FindBy(xpath="//div[contains(text(),'United States')]")
	public WebElement cbxValidateUSA;
	
	
	//Search for Big and Tall Tee Link
	@FindBy(xpath="//span[contains(text(),'Big & Tall Cotton Tee. Sizes 4 XLT to 8XLT. With & without pockets. MADE IN USA')]")
	public WebElement txtBigTallTee;
	
	
	
	
	
	
} 
