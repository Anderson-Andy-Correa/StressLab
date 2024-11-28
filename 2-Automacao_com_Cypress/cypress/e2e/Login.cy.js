describe('Teste nas funções de Login', () => {
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
    it('Login com informações Corretas e Log out', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Login in está visivel.
        cy.get('a.nav-link').contains('Log in').should('be.visible');
        //Validação do comportamento simulando click botão Login in.
        cy.get('a.nav-link').contains('Log in').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#logInModal').should('be.visible').and('contain.text', 'Log in');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Dados campos de Usuário e Senha.
        cy.get('#loginusername').type('Starnix');
        cy.get('#loginpassword').type('123');
        //Validação de comportamento simulando click no botão Login in.
        cy.get(' .btn-primary').contains('Log in').click();
        //Verificar se o nome de usuário surge no menu.
        cy.get('#nameofuser').should('contain.text', 'Welcome Starnix')
        //Verificar se o botão Log out está visivel.
        cy.get('#logout2').contains('Log out').should('be.visible');
        //Validação do comportamento simulando click botão Log out.
        cy.get('#logout2').click();
        //Tempo para ocorrer o Log Out.
        cy.wait(500);
        //Verificar se o usuário foi desconectado.
        cy.get('Starnix').should('not.exist');
        cy.get('#login2').should('be.visible');
        //Limpar Cookies utilizados no Site.
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    it('Login com informações Incorretas', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Login in está visivel.
        cy.get('a.nav-link').contains('Log in').should('be.visible');
        //Validação do comportamento simulando click botão Login in.
        cy.get('a.nav-link').contains('Log in').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#logInModal').should('be.visible').and('contain.text', 'Log in');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Dados campos de Usuário e Senha.
        cy.get('#loginusername').type('Starnyx');
        cy.get('#loginpassword').type('456');
        //Validação de comportamento simulando click no botão Login in.
        cy.get(' .btn-primary').contains('Log in').click();
        //Verificar alerta de usuário inexistente.
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.');
        });
        //Verificar se o usuário foi conectado.
        cy.get('Starnix').should('not.exist');
        cy.get('#login2').should('be.visible');
        //Fechar aba de Login.
        cy.get('#logInModal .close').click();
    });
    it('Login com Campos Vazios', () => {
        cy.visit('http://www.demoblaze.com');
        //Verificar se o botão Login in está visivel.
        cy.get('a.nav-link').contains('Log in').should('be.visible');
        //Validação do comportamento simulando click botão Login in.
        cy.get('a.nav-link').contains('Log in').click();
        //Verificar se Modal surgiu na tela com sucesso.
        cy.get('#logInModal').should('be.visible').and('contain.text', 'Log in');
        //Tempo para ocorrer a animação do Modal.
        cy.wait(500);
        //Validação de comportamento simulando click no botão Login in.
        cy.get(' .btn-primary').contains('Log in').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.');
        });
    });
});