describe('Contact Us', () => {
    it('should contain a contact link with the specified email address', () => {
      cy.visit('http://localhost:3000');

      cy.get('#contactUs').should('have.attr', 'src', '/homepagePics/email.png').should('have.attr', 'alt', 'Email Icon');

      cy.get('#contactUs').click();
  
    });
  });
  

describe('Footer Links', () => {
    it('should navigate to Home page when "Home" link is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-home-link').should('be.visible').click();

      cy.url().should('include', 'localhost:3000/'); 
    });
  });

  describe('Footer Links', () => {
    it('should navigate to Shop page when "Shop" link is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-shop-link').should('be.visible').click();

      cy.url().should('include', 'http://localhost:3000/shop-layout'); 
    });
  });

  describe('Footer Links', () => {
    it('should navigate to Appointment page when "Appointment" link is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-appointments-link').should('be.visible').click();

      cy.url().should('include', 'http://localhost:3000/appointments'); 
    });
  });

  describe('Footer Links', () => {
    it('should navigate to Instagram page when "Instagram" icon is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-instagram-link').should('be.visible').click();

      cy.url().should('include', 'https://www.instagram.com/cultureforyou_/'); 
    });
  });

  describe('Footer Links', () => {
    it('should navigate to Privacy Policy page when "Privacy Policy" icon is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-privacy-link').should('be.visible').click();

      cy.url().should('include', 'http://localhost:3000/privacy-policy'); 
    });
  });

  describe('Footer Links', () => {
    it('should navigate to Terms page when "Term" icon is clicked', () => {

      cy.visit('http://localhost:3000'); 

      cy.get('#footer-terms-link').should('be.visible').click();

      cy.url().should('include', 'http://localhost:3000/terms'); 
    });
  });


  