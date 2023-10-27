describe("Henna Page", () => {
	it("should load the Henna page successfully", () => {
		cy.visit("/henna-showcase");

		cy.get("h1").should("contain.text", "Henna Shop");
	});

	it("should navigate to the appointments page when a Henna image is clicked", () => {
		cy.visit("/henna-showcase");

		cy.get("#appointments-link").should("be.visible").click();
		cy.contains("All").click();
		cy.url().should("include", "/appointments");

		//go back to test other categories
		cy.go("back");
	});

	it("should navigate to all the shop categories", () => {
		cy.visit("/henna-showcase");

		//test the Topper showcase link
		cy.get("#topper-showcase-link").should("be.visible").click();
		cy.contains("Topper").click();
		cy.url().should("include", "/topper");

		cy.go("back");

		//test the engraving showcase link
		cy.get("#engraving-showcase-link").should("be.visible").click();
		cy.contains("Engraving").click();
		cy.url().should("include", "/engraving-showcase");

		cy.go("back");

		//test the wedding sign showcase link
		cy.get("#wedding-sign-showcase-link").should("be.visible").click();
		cy.contains("Wedding Sign").click();
		cy.url().should("include", "/wedding-sign");

		cy.go("back");
	});
});
