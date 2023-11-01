describe("Engraving Page Test", () => {
    beforeEach(() => {
		cy.visit("/engraving-showcase");
	});

    //Test all h1
    it("Test all headers elements are visable", () => {
		cy.get("h1").each((header) => {
			cy.wrap(header).should("be.visible");
		});
	});

    //Test all h2
    it("Test all headers 2 elements are visable", () => {
		cy.get("h2").each((header2) => {
			cy.wrap(header2).should("be.visible");
		});
	});

    //Test p
    it("Test to ensure paragraphs can be displayed", () => {
		cy.get("p").each((paragraph) => {
			cy.wrap(paragraph).should("be.visible");
		});
	});

    //Test center
    it("Test to ensure center can be displayed", () => {
		cy.get("center").each((center) => {
			cy.wrap(center).should("be.visible");
		});
	});

    //Test a
    it("Should Test all the <a> tags are not empty", () => {
		cy.get("a").each((link) => {
			cy.wrap(link).should("have.attr", "href").and("not.be.empty");
		});
	});

    //Test span
    it("Should Test all the <span> tags with 'href' attribute are not empty", () => {
        cy.get("span").each((link) => {
            cy.wrap(link).should(($span) => {
                if ($span.attr("href")) {
                    expect($span.attr("href")).to.not.be.empty;
                }
            });
        });
    });
    

      

    //Test img
    it("Test the Image elements are not empty", () => {
		cy.get("img").each((image) => {
			cy.wrap(image).should("have.attr", "alt").and("not.be.empty");
		});
	});

    //Test image click
    it("Test Clicking Images", () => {
		const imagesAndUrls = [
			{ selector: "#order-form-image", expectedUrl: "/special-orders" },
		];

		imagesAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/engraving-showcase");
			cy.get(selector).click();
			cy.url().should("include", expectedUrl);
		});
	});

    //Test button click
    it("Test Clicking Buttons", () => {
		const buttonsAndUrls = [
            { selector: "#shop-layout-button", expectedUrl: "/shop-layout" },
			{ selector: "#henna-showcase-button", expectedUrl: "/henna-showcase" },
			{ selector: "#topper-button", expectedUrl: "/topper" },
			{ selector: "#engraving-showcase-button", expectedUrl: "/engraving-showcase" },
			{ selector: "#wedding-sign-button", expectedUrl: "/wedding-sign" },
		];

		buttonsAndUrls.forEach(({ selector, expectedUrl }) => {
			cy.visit("/engraving-showcase");
			cy.get(selector).click();
			cy.url().should("include", expectedUrl);
		});
	});


});