describe("Login", function() {
    it("Sign in", function() {
        cy.visit("https://react-redux.realworld.io/#/login?_k=qbc19w");
        cy.get('input[type="email"]').type('luisportelacoelho@gmail.com');
        cy.get('input[type="password"]').type('Scorpios1238');
        cy.get('button[type="submit"]').click();
        cy.contains("Your Feed");
    })
})