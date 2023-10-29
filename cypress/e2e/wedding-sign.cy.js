describe("Wedding Sign Page", () => {
	it("should load the Wedding Sign page successfully", () => {
		cy.visit("/wedding-sign");

		cy.get("h1").should("contain.text", "Wedding Sign Shop");
	});

	it("should navigate to the special orders form when a wedding sign image is clicked", () => {
		cy.visit("/wedding-sign");

		cy.get("#special-orders-link").should("be.visible").click();
		cy.contains("All").click();
		cy.url().should("include", "/special-orders");

		//go back to test other categories
		cy.go("back");
	});

	it("should navigate to all the shop categories", () => {
		cy.visit("/wedding-sign");

		//test the henna showcase link
		cy.get("#henna-showcase-link").should("be.visible").click();
		cy.contains("Henna").click();
		cy.url().should("include", "/henna-showcase");

		cy.go("back");

		//test the engraving showcase link
		cy.get("#engraving-showcase-link").should("be.visible").click();
		cy.contains("Engraving").click();
		cy.url().should("include", "/engraving-showcase");

		cy.go("back");

		//test the topper showcase link
		cy.get("#topper-showcase-link").should("be.visible").click();
		cy.contains("Topper").click();
		cy.url().should("include", "/topper");

		cy.go("back");
	});
});
