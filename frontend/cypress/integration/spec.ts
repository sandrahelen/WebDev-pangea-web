describe('End-2-End test', () => {
    const username = "user";

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('should open in browser', () => {
        cy.contains("PANGEA");
    });

    it('should see all countries', () => {
        cy.contains("Alle land").click();
        cy.url().should('include', 'alle');
    });

    it('should filter countries by continent', () => {
        cy.contains("Alle land").click();
        cy.contains("Oceania").click();
        cy.contains("New Zealand").should('exist');
        cy.contains("Norway").should('not.exist');
    });

    it("should get error, user doesn't exist", () => {
        cy.contains("Logg inn").click();
        cy.url().should('include', 'login');
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.get('notification-message').children()
            .should('contain', 'User does not exist')
            .and('be.visible');
    });

    it('should register new user', () => {
        cy.contains("Registrer").click();
        cy.url().should('include', 'registrer');
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.contains("Logg ut").click();
    });

    it('should log in as existing user', () => {
        cy.contains("Logg inn").click();
        cy.url().should('include', 'login');
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.contains("Logg ut").click();
    });

    it('should get error, user exists', () => {
        cy.contains("Regitrer").click();
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.get('notification-message').children()
            .should('contain', 'User already exists')
            .and('be.visible');
    });

    it('should see visited countries', () => {
        cy.contains("Logg inn").click();
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.contains("Besøkte land").click();
        cy.url().should('include', 'mine');
        cy.contains("Logg ut").click();
        cy.url().should('include', 'alle');
        cy.contains('Logg ut').click();
    });

    it('should add visited country', function () {
        cy.contains("Logg inn").click();
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.contains("Besøkte land").click();
        //TO-DO
        cy.contains('Logg ut').click();
    });

    it('should search for country', function () {
        //TO-DO
    });
});