import dayjs from 'dayjs';

describe('Appointments page test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/appointments');
    });

    //Test all h1
    it("Test all h1 elements", () => {
		cy.get("h1").each((header) => {
			cy.wrap(header).should("be.visible");
		});
	});

    //Test p
    it("Test all paragraph elements", () => {
		cy.get("p").each((paragraph) => {
			cy.wrap(paragraph).should("be.visible");
		});
	});

    //Test all h2
    it("Test all h2 elements", () => {
		cy.get("h2").each((header2) => {
			cy.wrap(header2).should("be.visible");
		});
	});

    // Test Calendar Views
    it('Test Month View', () => {
        // Click on Month view
        cy.contains('button', 'Month').click();
        // Get the current month, date, or year
        const currentMonthYear = dayjs().format('MMMM YYYY');
        // Assert that the current month and year are visible
        cy.contains(currentMonthYear).should('be.visible');
    });

    it('Test Week View', () => {
        // Click on Week view
        cy.contains('button', 'Week').click();
        // Get the start and end dates of the current week using dayjs
        const startOfWeek = dayjs().startOf('week').format('MMMM DD');
        const endOfWeek = dayjs().endOf('week').format('DD');
        const weekDateRange = `${startOfWeek} – ${endOfWeek}`;
        cy.contains(weekDateRange).should('be.visible');
    });

    it('Test Day View', () => {
        // Click on Day view
        cy.contains('button', 'Day').click();
        // Get the current date using dayjs
        const currentDate = dayjs().format('dddd MMM DD');
        // Assert that the current date is visible
        cy.contains(currentDate).should('be.visible');
    });

    it('Test Agenda View', () => {
        // Click on Agenda view
        cy.contains('button', 'Agenda').click();
        // Get the start and end dates of the current agenda using dayjs
        const startOfAgenda = dayjs().format('MM/DD/YYYY');
        const endOfAgenda = dayjs().add(30, 'day').format('MM/DD/YYYY');
        const agendaDateRange = `${startOfAgenda} – ${endOfAgenda}`;
        // Assert that the current agenda date range is visible
        cy.contains(agendaDateRange).should('be.visible');
    });

    it('Test Today View', () => {
        // Click on Today view
        cy.contains('button', 'Month').click();
        cy.contains('button', 'Today').click();
        const currentMonthYear = dayjs().format('MMMM YYYY');
        cy.contains(currentMonthYear).should('be.visible');
    });

    it('Test Back View', () => {
        // Click on Back view
        cy.contains('button', 'Month').click();
        cy.contains('button', 'Back').click();
        const previousMonthYear = dayjs().subtract(1, 'month').format('MMMM YYYY');
        cy.contains(previousMonthYear).should('be.visible');
    });

    it('Test Next View', () => {
        // Click on Next view
        cy.contains('button', 'Month').click();
        cy.contains('button', 'Next').click();
        const nextMonthYear = dayjs().add(1, 'month').format('MMMM YYYY');
        cy.contains(nextMonthYear).should('be.visible');
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
