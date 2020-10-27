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

    /*
    it('should open in browser', () => {
        cy.contains("Logg inn").click();
        cy.url().should('include', 'login');
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.get('notification-message').children()
            .should('contain', 'User does not exist')
            .and('be.visible');
    });
     */

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
    });

    it('should see visited countries', () => {
        cy.contains("Besøkte land").click();
        cy.url().should('include', 'mine');
        cy.contains("Logg ut").click();
        cy.url().should('include', 'alle');
    });
});