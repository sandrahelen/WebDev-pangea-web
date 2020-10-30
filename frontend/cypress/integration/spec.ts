describe('End-2-End test', () => {
    const username = "user";
    const country = "New Zealand";

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('should open in browser', () => {
        cy.contains("PANGEA");
    });

    it('should see all countries', () => {
        cy.contains("Alle land").click();
        cy.url().should('include', 'alle');
        cy.get('input[type=text]').type(" ");
        cy.get('input[type=submit]').click();
        cy.contains("Afghanistan");
        cy.contains("Sorter land").click();
        cy.contains("Zimbabwe")
    });

    it('should filter countries by continent', () => {
        cy.contains("Alle land").click();
        cy.contains("Oceania").click();
        cy.contains("2").click();
        cy.contains(country).should('exist');
        cy.contains("Norway").should('not.exist');
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
        cy.reload();
        cy.contains("Logg ut").click();
    });

    it('should see visited countries', () => {
        cy.contains("Logg inn").click();
        cy.get('input[type=text]').type(username);
        cy.get('input[type=submit]').click();
        cy.contains("Besøkte land").click();
        cy.url().should('include', 'mine');
        cy.get('input[type=text]').type(country);
        cy.get('input[type=submit]').click();
        cy.reload();
        cy.contains("Besøkte land").click();
        cy.contains(country);
        cy.contains("Logg ut").click();
    });

    it('should search for country', () => {
        cy.contains("Alle land").click();
        cy.get('#alle').click();
        cy.get('input[type=text]').type(country);
        cy.get('input[type=submit]').click();
        cy.contains(country).click();
        cy.url().should('include', 'info');
        cy.contains('Nasjonalrett');
        cy.contains('Bacon and egg pie, lamb, pavlova');
    });
});