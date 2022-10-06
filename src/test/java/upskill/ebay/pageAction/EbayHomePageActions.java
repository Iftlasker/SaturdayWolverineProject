package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.EbayHomePageLocators;
import upskill.utilities.SetupDrivers;

public class EbayHomePageActions {
	
	EbayHomePageLocators EbayHomePageLocatorsObj;

	public EbayHomePageActions(){
		EbayHomePageLocatorsObj = new EbayHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomePageLocatorsObj);
	}
	
	public void searchShoes(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Shoes");
		EbayHomePageLocatorsObj.btnSearch.click();
	}
	
	public void searchAllcategories(){
		EbayHomePageLocatorsObj.ctgSearch.click();
		
	}
	
	public void searchBooks(){
		EbayHomePageLocatorsObj.bookSearch.click();
		EbayHomePageLocatorsObj.btnSearch.click();
	}
	
	public void searchElectronics(){
		EbayHomePageLocatorsObj.ElectronicSearch.click();
	}
	
	public void searchToys(){
		EbayHomePageLocatorsObj.ToySearch.click();
	}
	
	public void searchPants(){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Pants");
		EbayHomePageLocatorsObj.btnSearch.click();		
	}
	
	public void searchItems(String items){
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(items);
		EbayHomePageLocatorsObj.btnSearch.click();		
	}
	
	
	
}
