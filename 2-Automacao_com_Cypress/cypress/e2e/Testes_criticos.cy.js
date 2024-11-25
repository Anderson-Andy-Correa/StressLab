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
})