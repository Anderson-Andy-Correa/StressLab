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

Cypress.Commands.add('preencheDadosConta', (formpath, usuario, senha)=>{
    cy.get(formpath).then((form)=>{
        cy.wrap(form).find('input[id*="username"]').type(usuario, { force: true, delay: 100});
        cy.wrap(form).find('input[id*="password"]').type(senha, { delay: 500 });    
    })
})