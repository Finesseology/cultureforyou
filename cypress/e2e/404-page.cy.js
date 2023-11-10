
describe("404 Page Test", () => {
	beforeEach(() => {
		cy.visit("/404", {failOnStatusCode: false});
	});

	it("Should Test all the <a> tags are not empty", () => {
		cy.get("a").each((link) => {
			cy.wrap(link).should("have.attr", "href").and("not.be.empty");
		});
	});


    it("Should Test all the <span> tags with 'href' attribute are not empty", () => {
        cy.visit("/404", {failOnStatusCode: false});
        cy.get("span").each((link) => {
            cy.wrap(link).should(($span) => {
                if ($span.attr("href")) {
                    expect($span.attr("href")).to.not.be.empty;
                }
            });
        });
    });

	it("Test Clicking Nav Buttons", () => {
		const buttonsAndUrls = [
			{ selector: "#404-home-button", expectedUrl: "/" },
			{ selector: "#404-appointments-button", expectedUrl: "/appointments" },
			{ selector: "#404-sign-in-button", expectedUrl: "/sign-in-page" }
		];

        

		buttonsAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/404", {failOnStatusCode: false});
			cy.get(selector).click({ force: true });
			cy.url().should("include", expectedUrl, { timeout: 10000 });
		});
	});


    it("Test Clicking Shop Links", () => {
        const shopLinksAndUrls = [
            { selector: "#404-henna-showcase", expectedUrl: "/henna-showcase" },
			{ selector: "#404-topper-showcase", expectedUrl: "/topper" },
            { selector: "#404-engraving-showcase", expectedUrl: "/engraving-showcase" },
            { selector: "#404-wedding-sign-showcase", expectedUrl: "/wedding-sign" }
    ];

    shopLinksAndUrls.forEach(({ selector, expectedUrl }) => {
        cy.visit("/404", {failOnStatusCode: false});
        cy.get(selector).click({ force: true });
        cy.url().should("include", expectedUrl, { timeout: 10000 });
    });

    });


	

	it("Should refresh the 404 page", () => {
		cy.reload();
		cy.url("/404").should("eq", `${Cypress.config().baseUrl}404`);
	});

	
});

