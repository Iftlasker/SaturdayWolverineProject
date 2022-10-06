@regression @smoke  @E2E
Feature: Ebay view all Electronic products

Scenario: View Electronics
		Given Open Ebay Homepage
		When click on electronics
		Then Item list should have only electronics related products