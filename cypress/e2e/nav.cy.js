describe("Navigation", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("navigates back to the homepage when clicking 'Home'", () => {
		cy.get('a[href="/"]').click({ multiple: true });
		cy.url().should("eq", Cypress.config().baseUrl); // Ensure that URL is exactly the base URL ("/")
	});

	it("visits the appointments page", () => {
		cy.get('a[href*="/appointments"]').click({ multiple: true });
		cy.url().should("include", "/appointments");
	});

	it("visits the shop page", () => {
		cy.get('a[href*="/shop-layout"]').click({ multiple: true });
		cy.url().should("include", "/shop-layout");
	});

	it("visits the sign in page", () => {
		cy.get('a[href*="/sign-in-page"]').click({ multiple: true });
		cy.url().should("include", "/sign-in-page");
	});
});
