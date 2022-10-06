@regression @smoke @SKYW-15 @E2E
Feature: Ebay Search By Categories

	Scenario: Search By Categories
		Given Open Ebay Homepage
		When Select All Categories
		And Select Books & Magazines from All Categories   
		Then Item list should have only Books & Magazines 