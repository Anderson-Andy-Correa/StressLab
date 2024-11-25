describe('Testes Criticos DemoBlaze', () => {
  const URL = 'https://www.demoblaze.com'
  
  beforeEach(() => {
    cy.intercept('GET', '/').as('paginaInicial');
    cy.visit(URL);
  })

  it('Acessar o site', () => {
    cy.wait('@paginaInicial').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    })
  })

  it('Registrar no site', ()=>{ 
    cy.visit(URL)
    cy.get('a[id="signin2"]').click()
    cy.get('input[id="sign-username"]').type('teste123@teste123.com.br', { force: true }, { delay: 500 })
    cy.get('input[id="sign-password"]').type('teste123', { delay: 500 })
    cy.get('button[onclick="register()"]').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Sign up sucessful.');
    })
  })
})