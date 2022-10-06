@regression @smoke  @E2E
Feature: Ebay view all Toys

Scenario: View Toy
		Given Open Ebay Homepage
		When click on Toys
		Then Item list should have only Toy related products
		