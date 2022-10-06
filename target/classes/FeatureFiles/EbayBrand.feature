@regression @smoke  @E2E
Feature: Ebay Search by Specific Brands

	Scenario: Search for Shoes
		Given Open Ebay Homepage
		When Search for shoes
		And Filters By Brand
		Then Item list should have only shoes related Brand products
		