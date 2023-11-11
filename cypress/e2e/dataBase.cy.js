///<reference types = "cypress"/>

describe("Business Database Managment", () => {

    it('should create the appointmentRequest table into DB', () => {
        cy.task('queryDB', `CREATE TABLE appointmentRequest(
                    id int PRIMARY KEY auto_increment,
                    userId varchar(255),
                    userName varchar(255),
                    title varchar(255),
                    start_time datetime NOT NULL,
                    end_time datetime NOT NULL,
                    status varchar(20))`)
    });

    it('should insert rows into appointmentRequest', () => {
        cy.task('queryDB', `INSERT INTO appointmentRequest (userId, userName, title, start_time, end_time, status) VALUES ('101', 'Kile', 'MakeUp', '2023-10-31 10:00:00', '2023-10-31 11:00:00', 'accepted'),
    ('100', 'Lyla', 'Geometry', '2023-10-30 9:00:00', '2023-10-30 10:00:00', 'accepted');`)
            .then((result) => {
                expect(result.affectedRows).to.equal(2)
            })
    });

    // this test case will work when we have only two rows in the table
    it('should read all rows from the appointmentRequest table ', () => {
        cy.task('queryDB', `SELECT userId, userName, title, DATE_FORMAT(start_time, '%c-%d-%Y %h:%i:%s %p') as start_time, DATE_FORMAT(end_time, '%c-%d-%Y %h:%i:%s %p') as end_time, status FROM appointmentRequest`)
            .then((result) => {
                expect(result).to.have.lengthOf(2)
                expect(result[0]).to.deep.include({ userId: '101', userName: 'Kile', title: 'MakeUp', start_time: '10-31-2023 10:00:00 AM', end_time: '10-31-2023 11:00:00 AM', status: 'accepted' })
                expect(result[1]).to.deep.include({ userId: '100', userName: 'Lyla', title: 'Geometry', start_time: '10-30-2023 09:00:00 AM', end_time: '10-30-2023 10:00:00 AM', status: 'accepted' })
            })
    });

    it('should update a row in the appointmentRequest table', () => {
        cy.task('queryDB', `UPDATE appointmentRequest SET start_time = '2023-10-27 18:00:00', end_time = '2023-10-27 19:00:00' WHERE userId = '101';`)
            .then((result) => {
                expect(result.affectedRows).to.equal(1)
            })
    });

    // since in this test case we added two rows, the delete query will also expect 2 affected rows
    it('should delete rows from the appointmentRequest table', () => {
        cy.task('queryDB', `DELETE FROM appointmentRequest;`)
            .then((result) => {
                expect(result.affectedRows).to.equal(2)
            })
    });

    it("DROP appointmentRequest TABLE from database", () => {
        cy.task('queryDB', `DROP TABLE appointmentRequest`)
            .then((result) => {
                expect(result.affectedRows).to.equal(0)
            })
    });

    it('should create the shop table into DB', () => {
        cy.task('queryDB', `CREATE TABLE shop(
                imageName text NOT NULL,
                imageType varchar(60) NOT NULL,
                imageTitle varchar(120) NOT NULL,
                imageDesc text,
                PRIMARY KEY (imageType,imageTitle));`)
    });

    it('should insert a row into shop table', () => {
        cy.task('queryDB', `INSERT INTO shop (imageName, imageType, imageTitle, imageDesc) VALUES ('PurpleCherryBlossom.png','engraving','Floral Design','A trendy floral style that has just the right touch');`)
            .then((result) => {
                expect(result.affectedRows).to.equal(1)
            })
    });

    //in this test case the table only has one row
    it('should read all rows from the shop table ', () => {
        cy.task('queryDB', `SELECT * FROM shop`)
            .then((result) => {
                expect(result).to.have.lengthOf(1)
                expect(result[0]).to.deep.include({ imageName: 'PurpleCherryBlossom.png', imageType: 'engraving', imageTitle: 'Floral Design', imageDesc: 'A trendy floral style that has just the right touch' })
            })
    });

    it('should delete rows from the shop table', () => {
        cy.task('queryDB', `DELETE FROM shop WHERE imageType = 'engraving';`)
            .then((result) => {
                expect(result.affectedRows).to.equal(1)
            })
    });

    it("DROP shop TABLE from database", () => {
        cy.task('queryDB', `DROP TABLE shop`)
            .then((result) => {
                expect(result.affectedRows).to.equal(0)
            })
    });

});