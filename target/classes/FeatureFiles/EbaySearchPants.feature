@regression @smoke  @E2E
Feature: Ebay Search Functionality

Scenario: Search for Pants
		Given Open Ebay Homepage
		When Search for pants
		Then Item list should have only pants related products
		