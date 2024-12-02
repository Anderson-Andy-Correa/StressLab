import { faker } from '@faker-js/faker';

describe('Testes Criticos DemoBlaze', () => {
  const URL = 'https://www.demoblaze.com'
  const randomUsername = faker.internet.email(); // Gera um email aleatório
  const senha = 'teste123';
  
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
    cy.intercept('POST', '/signup').as('cadastroRequest');

    // Fluxo do teste
    cy.get('a[id="signin2"]').click();
    cy.preencheDadosConta('#signInModal > div > div > div.modal-body > form', randomUsername, senha);
    cy.get('button[onclick="register()"]').click();

    // Validar o alerta
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Sign up successful.');
    });

    cy.wait('@cadastroRequest');
  })

  it('Login no site', () => {
    cy.get('#login2').click();
    cy.preencheDadosConta('#logInModal > div > div > div.modal-body > form', randomUsername, senha);
    cy.get('button[onclick="logIn()"]').click();
    cy.get('a[id="nameofuser"]', {timeout: 10000}).should('contains.text', `Welcome ${randomUsername}`);
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