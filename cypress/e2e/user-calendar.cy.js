describe('Appointments API', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/appointments');
        });

    it('Fetches appointments data successfully', () => {
      cy.request('GET', '/api/appointmentRequest') // Adjust the URL as needed
        .should((response) => {
          expect(response.status).to.eq(200); // Ensure the response status is 200 (OK)
          expect(response.body).to.have.property('appointments'); // Ensure the response has an "appointments" property
          expect(response.body.appointments).to.be.an('array'); // Ensure the "appointments" property is an array
        });
    });
});