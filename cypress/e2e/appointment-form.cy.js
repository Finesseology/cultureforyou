
describe('AppointmentForm Component', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000/appointments-form');
    });
    
    
    it('Fill out all fields and submit appointment', () => {
    // Fill out all fields
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    // Find the DatePicker input field and type the desired date (MM/DD/YYYY)
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    // Select the current day on the date picker
    cy.get('.react-datepicker__day--today').click();
    // Find the "Start Time" dropdown and click the container element to open it
    cy.get('#start-time').click();
    // Now, you can click the specific option "9:00 AM" to select it
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    // Find the "End Time" dropdown and click the container element to open it
    cy.get('#end-time').click();
    // Click the specific option "11:30 AM" to select it
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    // Submit the form
    cy.get('button').contains('Send Order').click();
    // Check for success message
    cy.contains('Order sent successfully!').should('be.visible');
    });
    
    
    it('Leave all fields empty and submit appointment', () => {
    // Submit the form without filling out any fields
    cy.get('button').contains('Open Form').click();
    cy.get('button').contains('Send Order').click();
    // Check that no success message is displayed
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    //Fill out everything but leave one component out
    //First name, last name, email, title, date, start/end time
    it('If first name is missing, it should not send', () => {
    // Fill out all fields except first name
    cy.get('button').contains('Open Form').click();
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    // Submit the form
    cy.get('button').contains('Send Order').click();
    // Check that no success message is displayed
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If last name is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If email is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If title is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If date is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If start time is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('If end time is missing, it should not send', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    //Check if first and last name contain anything other than letters
    it('First name should only contain letters', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John1');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@gmail.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('Last name should only contain letters', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe1');
    cy.get('#email').type('john.doe@gmail.com');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    //Check if email has @ and after @ should have text
    it('Email must contain an @', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    it('Email must contain text after the @', () => {
    cy.get('button').contains('Open Form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@');
    cy.get('#title').type('Important Meeting');
    cy.get('.react-datepicker__input-container input').type('10/26/2023');
    cy.get('.react-datepicker__day--today').click();
    cy.get('#start-time').click();
    cy.get('ul[role="listbox"] li').contains('9:00 AM').click();
    cy.get('#end-time').click();
    cy.get('ul[role="listbox"] li').contains('11:30 AM').click();
    cy.get('button').contains('Send Order').click();
    cy.contains('Order sent successfully!').should('not.exist');
    });
    
    
    // Additional test cases can be added for other scenarios
    });
    
    
    