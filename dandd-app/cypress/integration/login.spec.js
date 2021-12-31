describe('Login', () => {

    it('Successful Login', () => {
        //Visit the login page and input username + password that is valid
        cy.visit('http://localhost:8080/login')

        cy.get('input[name=Email').type("j@j.dk")
        cy.get('input[name=Password').type("123456")
        //Push submit and check the correct URL
        cy.get('button').contains('Login').click()

        cy.url().should('contain', 'http://localhost:8080')

    })

    it('Session Storage, Token is there', () => {

        cy.window()
            .its("sessionStorage")
            .invoke("getItem", "token")
            .should("exist");
    })

    it('Logout', () => {
        //Visit the front page
        cy.visit('http://localhost:8080')
        //Push the logout button in the navbar
        cy.get('button').contains('Log ud').click()
        //Checks the URL is correct
        cy.url().should('contain', 'http://localhost:8080/login')

    })

    it('Session Storage, Token is it cleared?', () => {

        cy.window()
            .its("sessionStorage")
            .invoke("getItem", "token")
            .should("not.exist");
    })

    it('Failed Login', () => {
        //Visit the login page and input username + password that is invalid
        cy.visit('http://localhost:8080/login')

        cy.get('input[name=Email').type("a@a.dk")
        cy.get('input[name=Password').type("654321")
        //Push submit and check the correct URL
        cy.get('button').contains('Login').click()

        cy.url().should('contain', 'http://localhost:8080/login')

    })

})