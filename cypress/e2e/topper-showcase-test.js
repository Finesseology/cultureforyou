describe('Toppers Page', () => {
  it('should load the Toppers page successfully', () => {
    cy.visit('http://localhost:3000/topper'); 

    
    cy.get('h1').should('contain.text', 'Cake Topper Shop');

  });

  it('should navigate to the special orders form when a topper image is clicked', () => {
    cy.visit('http://localhost:3000/topper'); 
    
  
    cy.get('#special-orders-link').should('be.visible').click();
    cy.contains('All').click();
    cy.url().should('include', 'http://localhost:3000/special-orders');

    //go back to test other categories
    cy.go('back');

  });

  it('should navigate to all the shop categories', () => {
    cy.visit('http://localhost:3000/topper'); 
    
    
    //test the henna showcase link
    cy.get('#henna-showcase-link').should('be.visible').click();
    cy.contains('Henna').click();
    cy.url().should('include', 'http://localhost:3000/henna-showcase');

    cy.go('back');


    //test the engraving showcase link
    cy.get('#engraving-showcase-link').should('be.visible').click();
    cy.contains('Engraving').click();
    cy.url().should('include', 'http://localhost:3000/engraving-showcase');

    cy.go('back');

    //test the wedding sign showcase link
    cy.get('#wedding-sign-showcase-link').should('be.visible').click();
    cy.contains('Wedding Sign').click();
    cy.url().should('include', 'http://localhost:3000/wedding-sign');

    cy.go('back');
  });
});
