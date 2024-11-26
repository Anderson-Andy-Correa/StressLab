import { faker } from '@faker-js/faker';

describe('Testes Criticos DemoBlaze', () => {
  const URL = 'https://www.demoblaze.com'
  const randomUsername = faker.internet.email(); // Gera um email aleatório
  
  beforeEach(() => {
    cy.intercept('GET', '/').as('paginaInicial');
    cy.visit(URL);
  })

  it('Acessar o site', () => {
    cy.wait('@paginaInicial').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  })

  it('Registrar no site', () => { 

    // Fluxo do teste
    cy.get('a[id="signin2"]').click();
    cy.get('input[id="sign-username"]').type(randomUsername, { force: true, delay: 100});
    cy.get('input[id="sign-password"]').type('teste123', { delay: 500 });
    cy.get('button[onclick="register()"]').click();

    // Validar o alerta
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Sign up sucessful.');
    });
  })

  it('Produto no carrinho', () => { 
    cy.get('a[id="cartur"]').click();
    cy.get('tbody[id="tbodyid"]').find('tr.sucess').should('have.length', 0);

    cy.get('a[href="index.html"]').first().click();
    cy.pegarPrimeiroProduto();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');
    });

    cy.get('a[id="cartur"]').click();
    cy.get('tr.success').then((items) => {
      expect(items.length).to.be.greaterThan(0);
    });
  })

})