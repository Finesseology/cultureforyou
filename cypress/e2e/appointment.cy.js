describe('Appointments Component', () => {
    it('Renders the component without events', () => {

      cy.intercept('GET', '/api/big-booking', { statusCode: 200, body: { appointments: [] } }).as('fetchEvents');
  
      cy.visit('http://localhost:3000/appointments');
  
      cy.wait('@fetchEvents');
  
      cy.contains('Loading...').should('not.exist');
  
      cy.get('.rbc-calendar').should('be.visible');
      cy.get('button').should('be.visible');
    });
  });
  