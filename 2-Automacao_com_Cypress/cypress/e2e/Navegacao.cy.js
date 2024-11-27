describe('Navegação entre páginas no DemoBlaze', () => {
    it('Deve carregar a Página Inicial com Sucesso', () => {
        cy.visit('https://www.demoblaze.com');
        //Verificar se o botão Home está visivel.
        cy.get('a.nav-link').contains('Home').should('be.visible');
        //Validação do comportamento simulando click botão Home.
        cy.get('a.nav-link').contains('Home').click();
        //Verificar página exibida
        cy.url().should('eq', 'https://www.demoblaze.com/index.html');
    });
    it('Deve carregar a página Contact com Sucesso', () => {
        cy.visit('https://www.demoblaze.com');
        //Verificar se o botão Contact está visivel.
        cy.get('a.nav-link').contains('Contact').should('be.visible');
        //Validação do comportamento simulando click botão Contact.
        cy.get('a.nav-link').contains('Contact').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#exampleModal').should('be.visible').and('contain.text', 'Contact');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Verificar botão de fechar Modal.
        cy.get('#exampleModal .close').click();
        //Verificar se o Modal foi fechado.
        cy.get('#exampleModal').should('not.be.visible');
    });
    it('Deve carregar a página About us com Sucesso', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão About us está visivel.
        cy.get('a.nav-link').contains('About us').should('be.visible');
        //Validação do comportamento simulando click botão About us.
        cy.get('a.nav-link').contains('About us').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#videoModal').should('be.visible').and('contain.text', 'About us');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Verificar botão de fechar Modal.
        cy.get('#videoModal .close').click();
        //Verificar se o Modal foi fechado.
        cy.get('#videoModal').should('not.be.visible');
    });
    it('Deve carregar a página Cart com Sucesso', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Cart está visivel.
        cy.get('a.nav-link').contains('Cart').should('be.visible');
        //Validação do comportamento simulando click botão Cart.
        cy.get('a.nav-link').contains('Cart').click();
        //Verificar página exibida
        cy.url().should('eq', 'https://www.demoblaze.com/cart.html');
    });
    it('Deve carregar a página Log in com Sucesso', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Login in está visivel.
        cy.get('a.nav-link').contains('Log in').should('be.visible');
        //Validação do comportamento simulando click botão Login in.
        cy.get('a.nav-link').contains('Log in').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#logInModal').should('be.visible').and('contain.text', 'Log in');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Verificar botão de fechar Modal.
        cy.get('#logInModal .close').click();
        //Verificar se o Modal foi fechado.
        cy.get('#logInModal').should('not.be.visible');
    });
    it('Deve carregar a página Sign Up com Sucesso', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Sign Up está visivel.
        cy.get('a.nav-link').contains('Sign up').should('be.visible');
        //Validação do comportamento simulando click botão Sign Up.
        cy.get('a.nav-link').contains('Sign up').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#signInModal').should('be.visible').and('contain.text', 'Sign up');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Verificar botão de fechar Modal.
        cy.get('#signInModal .close').click();
        //Verificar se o Modal foi fechado.
        cy.get('#signInModal').should('not.be.visible');
    });
});