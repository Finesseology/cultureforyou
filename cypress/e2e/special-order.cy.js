describe('SendEmail Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/special-orders'); 
    });
    
    it('Fill out all fields and submit order', () => {
        cy.get('#clientName').type('John Doe');
        cy.get('#returnEmail').type('john.doe@example.com');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('#text').type('I would like to order a wedding cake topper.');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully!').should('be.visible');
    });

    it('If all fields are missing, it should not send', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');
    });
  
    it('If your Name is missing, it should not send', () => {
        cy.get('#returnEmail').type('john.doe@example.com');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('#text').type('I would like to order a wedding cake topper.');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');

    });
    it('If your email is missing, it should not send', () => {
        cy.get('#returnEmail').type('john.doe@example.com');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('#text').type('I would like to order a wedding cake topper.');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');

    });
    
    it('If your product type is missing, it should not send', () => {
        cy.get('#clientName').type('John Doe');
        cy.get('#returnEmail').type('john.doe@example.com');
        cy.get('body').type('{esc}');
        cy.get('#text').type('I would like to order a wedding cake topper.');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');
    });

    it('If your description is missing, it should not send', () => {
        cy.get('#clientName').type('John Doe');
        cy.get('#returnEmail').type('john.doe@example.com');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');
    });
    
    it('Email must contain an @', () => {
        cy.get('#clientName').type('John Doe');
        cy.get('#returnEmail').type('john.doe');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');
    });

    it('Email must contain text after the @', () => {
        cy.get('#clientName').type('John Doe');
        cy.get('#returnEmail').type('john.doe@');
        cy.get('#productType').click();
        cy.contains('Toppers').click();
        cy.contains('Engraving').click();
        cy.contains('Wedding Signs').click();
        cy.get('body').type('{esc}');
        cy.get('button[type="submit"]').click();
        cy.contains('Order sent successfully').should('not.exist');
    });

  });
  