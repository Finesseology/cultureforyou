describe("Home Page Test", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Should Test all the <a> tags are not empty", () => {
		cy.get("a").each((link) => {
			cy.wrap(link).should("have.attr", "href").and("not.be.empty");
		});
	});

	it("Test all headers elements are visable", () => {
		cy.get("h1").each((header) => {
			cy.wrap(header).should("be.visible");
		});
	});

	it("Test to ensure paragraphs can be displayed", () => {
		cy.get("p").each((paragraph) => {
			cy.wrap(paragraph).should("be.visible");
		});
	});

	it("Test the Image elements are not empty", () => {
		cy.get("img").each((image) => {
			cy.wrap(image).should("have.attr", "alt").and("not.be.empty");
		});
	});

	it("Test all Shop Nav Bar Container", () => {
		const expectedUrls = ["./henna-showcase", "./topper", "./engraving-showcase", "./wedding-sign"];

		cy.get("#shopNavBarContainer").within(() => {
			cy.get("a").each((link, index) => {
				cy.wrap(link)
					.invoke("attr", "href")
					.then((href) => {
						cy.log(`Link ${index} href: ${href}`);
						expect(href).to.equal(expectedUrls[index]);
					});
			});
		});
	});

	it("Test Clicking Images", () => {
		const imagesAndUrls = [
			{ selector: "#home-henna-image", expectedUrl: "/henna-showcase" },
			{ selector: "#home-topper-image", expectedUrl: "/topper" },
			{ selector: "#home-engraving-image", expectedUrl: "/engraving-showcase" },
			{ selector: "#home-wedding-image", expectedUrl: "/wedding-sign" },
		];

		imagesAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/");
			cy.get(selector).click();
			cy.url().should("include", expectedUrl);
		});
	});

	it("Test Clicking Buttons", () => {
		const buttonsAndUrls = [
			{ selector: "#home-henna-button", expectedUrl: "/henna-showcase" },
			{ selector: "#home-topper-button", expectedUrl: "/topper" },
			{ selector: "#home-engraving-button", expectedUrl: "/engraving-showcase" },
			{ selector: "#home-wedding-button", expectedUrl: "/wedding-sign" },
		];

		buttonsAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/");
			cy.get(selector).click();
			cy.url().should("include", expectedUrl);
		});
	});

	it("Test Clicking Titles", () => {
		const titlesAndUrls = [
			{ selector: "#home-henna-title", expectedUrl: "/henna-showcase" },
			{ selector: "#home-topper-title", expectedUrl: "/topper" },
			{ selector: "#home-engraving-title", expectedUrl: "/engraving-showcase" },
			{ selector: "#home-wedding-title", expectedUrl: "/wedding-sign" },
		];

		titlesAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/");
			cy.get(selector).click();
			cy.url().should("include", expectedUrl);
		});
	});

	it("Should refresh the home page", () => {
		cy.reload();
		cy.url().should("eq", Cypress.config().baseUrl);
	});

	//it("Should load the home page", () => {
	//	cy.url().should("eq", Cypress.config().baseUrl + "/");
	//	cy.title().should("contain", "Home"); // Replace with your actual title
	//});
});
