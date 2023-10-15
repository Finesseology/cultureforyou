it('Opens the form', () => {
    cy.visit('http://localhost:3000/appointments');

    cy.get('button').contains('Open Form').click();

    cy.get('.MuiDialog-root').should('be.visible');
  });
  
it('Submits the form', () => {
    cy.visit('http://localhost:3000/appointments');
    cy.get('button').contains('Open Form').click();

 
    cy.contains('Name').parent().find('input').type('Henry Mahbobi'); 
  
    cy.contains('Email').parent().find('input').type('henrymahbobi@gmail.com'); 

    cy.contains('Please describe your Henna design').parent().type('This is a test'); 

    cy.get('button').contains('Send Order').click();

    cy.contains('Order sent successfully!').should('be.visible');
  });

it('Closes the form', () => {
    cy.visit('http://localhost:3000/appointments');
    cy.get('button').contains('Open Form').click();
    

    cy.get('button').contains('Cancel').click();
    
    
    cy.get('.MuiDialog-root').should('not.exist');
  });
  
