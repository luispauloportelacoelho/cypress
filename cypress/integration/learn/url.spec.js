// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />
describe("URL", function() {
    it("Sign in", function() {
        //enter in site
        cy.visit("https://react-redux.realworld.io/#/login?_k=qbc19w");
        //validate page
        cy.title().should('eq','Conduit');
        //validate url
        cy.url().should('include','https://react-redux.realworld.io');
        //validate protocol
        cy.location('protocol').should('eq', 'https:');
        cy.get('input[type="email"]').type('luisportelacoelho@gmail.com');
        cy.get('input[type="password"]').type('Scorpios1238');
        cy.get('button[type="submit"]').click();
        //validate that the page has the text -Your Feed- and the text is visible 
        cy.contains("Your Feed", {timeout:10000}).should('be.visible');
    })

    it("Create a post", function() {
        cy.contains('New Post').click();
        cy.url().should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').type("New article")
        cy.get('input[placeholder="What\'s this article about?"]').type("subject")
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type("Something")
        cy.get('button[type="button"]').click()
        cy.url().should('include', '/#/article')
    })

    it('Mark as favorite', function() {
        cy.get('.nav-link').contains('luisportelacoelho').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.get('.nav-link').contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.get('.article-preview').should('be.visible')
        cy.go('back')
    })

})