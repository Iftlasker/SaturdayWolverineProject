package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.ebay.pageElements.EbaySearchResultLocators;
import upskill.utilities.SetupDrivers;

public class EbaySearchResultActions {
	
	EbaySearchResultLocators EbaySearchResultLocatorsObj;
	
	public EbaySearchResultActions(){
		EbaySearchResultLocatorsObj = new EbaySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsObj);
	}
	
	public void verifyShoesItems(){
		//Option 1
		EbaySearchResultLocatorsObj.txtShoes.isDisplayed();
		
		//Option 2
		Assert.assertEquals("Shoes", EbaySearchResultLocatorsObj.txtShoes.getText());
		
		//Option 3
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtShoes.isDisplayed());
	}
	
	
	public void verifyBooksItems(){
		//Option 1
		EbaySearchResultLocatorsObj.txtBooks.isDisplayed();
		
		//Option 2
		Assert.assertEquals("Books & Magazines", EbaySearchResultLocatorsObj.txtBooks.getText());
		
		//Option 3
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtBooks.isDisplayed());
	}
	
	public void verifyPantsItems(){
		//Option 1
		EbaySearchResultLocatorsObj.txtPants.isDisplayed();
		
		//Option 2
		Assert.assertEquals("Pants", EbaySearchResultLocatorsObj.txtPants.getText());
		
		//Option 3
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtPants.isDisplayed());
	}
	
	public void filterBrand(String brand){
		if(brand.equals("Adidas")){
			EbaySearchResultLocatorsObj.cbxBrandAdidas.click();
		} else if (brand.equals("Nike")){
			EbaySearchResultLocatorsObj.cbxBrandNike.click();
		} else if (brand.equals("Unbranded")){
			EbaySearchResultLocatorsObj.cbxBrandUnbranded.click();
		} else {
			System.out.println("Brand not found, please implement !");
		}
	}
	
	public void VerifyBrandItems(String brand){
		if(brand.equals("Adidas")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.txtShirts.isDisplayed());
		} else if (brand.equals("Nike")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.txtShoes.isDisplayed());
		} else if (brand.equals("Unbranded")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.txtPants.isDisplayed());
		} else {
			System.out.println("Brand not found, please implement !");
		}
	}
	
	public void filterCountry(String country){
		if(country.equals("China")){
			EbaySearchResultLocatorsObj.selectCountry.click();
			EbaySearchResultLocatorsObj.cbxChina.click();
		} else if (country.equals("Bangladesh")){
			EbaySearchResultLocatorsObj.cbxBangladesh.click();
		} else if (country.equals("United States")){
			EbaySearchResultLocatorsObj.cbxUSA.click();
		} else {
			System.out.println("Country not found, please implement !");
		}
	}
	
	
	public void VerifyCountryItems(String country){
		if(country.equals("China")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.cbxValidateChina.isDisplayed());
		} else if (country.equals("Bangladesh")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.cbxValidateBangladesh.isDisplayed());
		} else if (country.equals("United States")){
			Assert.assertTrue(EbaySearchResultLocatorsObj.cbxValidateUSA.isDisplayed());
		} else {
			System.out.println("Brand not found, please implement !");
		}
	}
	
	
	
}
	

