// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('pesquisarCategoria', (categoria) => {
    cy.get(`a[onclick="byCat('${categoria}')"]`).click();
});

Cypress.Commands.add('pegarPrimeiroProduto', () => {
   cy.get('a[href^="prod.html?idp"]').first().click();
   cy.get('a[onclick^="addToCart"]').first().click();
});
