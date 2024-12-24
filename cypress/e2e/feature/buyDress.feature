Feature: add to cart feature

    @Smoke
    Scenario: buy dresses feature
        Given I visit application page and register to application with "<userName>" and "<password>"
        # When I am on home page
        # Then I am added dress to cart
        # And  I verify the successMessage of purchasecp


        Examples:
            | userName           | password |
            | username@gmail.com | password |