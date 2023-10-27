describe("Henna Page", () => {
	it("should load the Henna page successfully", () => {
		cy.visit("/henna-showcase");

		cy.get("h1").should("contain.text", "Henna Shop");
	});

	//Test all h1
	it("Test all headers elements are visable", () => {
		cy.visit("/henna-showcase");
		cy.get("h1").each((header) => {
			cy.wrap(header).should("be.visible");
		});
	});

	//Test all h2
	it("Test all headers 2 elements are visable", () => {
		cy.visit("/henna-showcase");
		cy.get("h2").each((header2) => {
			cy.wrap(header2).should("be.visible");
		});
	});

	//Test p
	it("Test to ensure paragraphs can be displayed", () => {
		cy.visit("/henna-showcase");
		cy.get("p").each((paragraph) => {
			cy.wrap(paragraph).should("be.visible");
		});
	});

	//Test center
	it("Test to ensure center can be displayed", () => {
		cy.visit("/henna-showcase");
		cy.get("center").each((center) => {
			cy.wrap(center).should("be.visible");
		});
	});

	//Test a
	it("Should Test all the <a> tags are not empty", () => {
		cy.visit("/henna-showcase");

		cy.get("a").each((link) => {
			cy.wrap(link).should("have.attr", "href").and("not.be.empty");
		});
	});

	//Test span
	it("Should Test all the <span> tags with 'href' attribute are not empty", () => {
		cy.visit("/henna-showcase");
		cy.get("span").each((link) => {
			cy.wrap(link).should(($span) => {
				if ($span.attr("href")) {
					expect($span.attr("href")).to.not.be.empty;
				}
			});
		});
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
		//test the All link
		cy.get("#all-link").should("be.visible").click();
		cy.contains("All").click();
		cy.url().should("include", "/shop-layout");

		cy.visit("/henna-showcase");
		//test the henna showcase link
		cy.get("#henna-showcase-link").should("be.visible").click();
		cy.contains("Henna").click();
		cy.url().should("include", "/henna-showcase");

		cy.visit("/henna-showcase");

		//test the Topper showcase link
		cy.get("#topper-showcase-link").should("be.visible").click();
		cy.contains("Topper").click();
		cy.url().should("include", "/topper");

		cy.visit("/henna-showcase");

		//test the engraving showcase link
		cy.get("#engraving-showcase-link").should("be.visible").click();
		cy.contains("Engraving").click();
		cy.url().should("include", "/engraving-showcase");

		cy.visit("/henna-showcase");

		//test the wedding sign showcase link
		cy.get("#wedding-sign-showcase-link").should("be.visible").click();
		cy.contains("Wedding Sign").click();
		cy.url().should("include", "/wedding-sign");

		cy.go("back");
	});
});
