describe("Testing Footer", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	/*
	it("should contain a contact link with the specified email address", () => {
		cy.get("#contactUs")
			.should("have.attr", "src", "/homepagePics/email.png")
			.should("have.attr", "alt", "Email Icon");

		cy.get("#contactUs").click();
	});
  */

	it('should navigate to Home page when "Home" link is clicked', () => {
		cy.get("#footer-home-link").should("be.visible").click();

		cy.url().should("include", "/");
	});

	it('should navigate to Shop page when "Shop" link is clicked', () => {
		cy.get("#footer-shop-link").should("be.visible").click();

		cy.url().should("include", "/shop-layout");
	});

	it('should navigate to Appointment page when "Appointment" link is clicked', () => {
		cy.get("#footer-appointments-link").should("be.visible").click();

		cy.url().should("include", "/appointments");
	});

	it('should navigate to Instagram page when "Instagram" icon is clicked', () => {
		cy.get("#footer-instagram-link").should("be.visible").click();

		cy.url().should("include", "https://www.instagram.com/cultureforyou_/");
	});

	it('should navigate to Privacy Policy page when "Privacy Policy" icon is clicked', () => {
		cy.get("#footer-privacy-link").should("be.visible").click();

		cy.url().should("include", "/privacy-policy");
	});

	it('should navigate to Terms page when "Term" icon is clicked', () => {
		cy.get("#footer-terms-link").should("be.visible").click();

		cy.url().should("include", "/terms");
	});
});
