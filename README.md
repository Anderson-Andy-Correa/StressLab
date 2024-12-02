# ![img Tutulo](https://capsule-render.vercel.app/api?type=waving&height=300&color=0:00FFB0,100:a82da8&text=STRESS%20LAB&textBg=false&fontColor=FFFFFF&fontSize=50&animation=twinkling&stroke=0000FF)

<br>

# 🔍 Sobre

Repositório de documentação do projeto StressLab, trabalho final do semestre (A3) da disciplina de Gestão e Qualidade de Software da Unisociesc 2024/02.

A ideia do projeto foi simular um ciclo completo de testes de software, abrangendo desde o planejamento até a analise e conclusão dos testes. 

<br>

---

# 🚀 Tecnologias


<div align="center" text-align="center">
  <table>
    <tr>
        <th style="text-align: center;">Word</th>
        <th style="text-align: center;">Cypress</th>
        <th style="text-align: center;">Jmeter</th>
        <th style="text-align: center;">Trello</th>
    </tr>
    <tr align="center">
      <td>
        <img src="https://logodownload.org/wp-content/uploads/2018/10/word-logo-0.png" alt="Word_logo" height="50"/>
      </td>
      <td>
        <img src="https://user-images.githubusercontent.com/2801156/153322291-8b186487-5127-48f7-aa6d-b0ef350f8575.png" alt="Cypress_Logo" width="50" height="50"/>
      </td>
      <td>
        <img src="https://jmeter.apache.org/images/logo.svg" alt="Jmeter_logo" height="50"/>
      </td>
      <td>
        <img src="https://icon-library.com/images/trello-icon-png/trello-icon-png-5.jpg" alt="Trello_logo" height="50"/>
      </td>
    </tr>
  </table>
</div>

<br>

---

# ❗Pré requisitos

É de extrema importância que já tenhas instalado as seguintes ferramentas no seu ambiente de trabalho, para o projeto funcionar normalmente:

1. [Node.js](https://nodejs.org/pt): Versão 16 ou superior.
2. [Java](https://www.java.com/pt-BR/): Versão 8 ou superior (necessário para executar o JMeter).
3. Ferramentas Instaladas:
   - [Cypress](https://www.cypress.io/)
   - [JMeter](https://jmeter.apache.org)
4. Navegador: [Chrome](https://www.google.pt/intl/pt-PT/chrome/), [Edge](https://www.microsoft.com/pt-br/edge/download) (ou outro compatível com o Cypress).

<br>

---

# 📘 Do by yourself

1. Cypress

    1. Para rodar os testes, use o terminal e navegue pela pasta [StressLab
/2-Automacao_com_Cypress](./2-Automacao_com_Cypress). Podes usar o seguinte comando para isso:

    ~~~bash
    cd .\2-Automacao_com_Cypress\
    ~~~

    2. Então, execute o seguinte comando:

    ~~~bash
    npx cypress open
    ~~~

    3. Deve abrir a página inicial do Cypress, então selecione a opção E2E Testing, conforme a imagem abaixo.

    ![img Tela Inicial Cypress](./Apresentacao/2-Abertura_cypress.png)

    4. Escolha o navegador de sua preferência e clique no botão marcado.

    ![img Start Testing](./Apresentacao/3-Selecao_Navegador.png)

    5. A página principal do projeto deve abrir e já aparecer a Spec Testes_criticos.cy.js, clique nele e deve começar a mostrar os testes em execução.

    ![img Specs](./Apresentacao/4-Pagina_principa_cypress.png)

    ![img Rodando testes](./Apresentacao/5-Rodando_testes.png)

2. Jmeter

    1. Para rodar os testes, navegue pela seguinte pasta do projeto:

        [StressLab/3-Testes_Nao_Funcionais_com_Jmeter/apache-jmeter-5.6.3/bin](./3-Testes_Nao_Funcionais_com_Jmeter/apache-jmeter-5.6.3/bin)
    
    2. Nessa mesma pasta, execute o inicializador do Jmeter  [ApacheJMeter.jar](./3-Testes_Nao_Funcionais_com_Jmeter/apache-jmeter-5.6.3/bin/ApacheJMeter.jar). 

    3. Deve carregar o iniciador do programa dessa forma:

        ![img Demonstração do iniciador do Jmeter](placeholder.png)
    

    4. A página inicial deve aparecer em poucos segundos, após isso, na aba arquivo (file), selecione a opção abrir (open)

        ![img Abrir arquivo no Jmeter](placeholder.png)
    
    5. Navegue pela seguinte pasta do projeto:

        [StressLab/3-Testes_Nao_Funcionais_com_Jmeter](./3-Testes_Nao_Funcionais_com_Jmeter)


    6. Selecione o arquivo do projeto do Jmeter [Teste Damoblaze.jmx](./3-Testes_Nao_Funcionais_com_Jmeter/Teste%20Damoblaze.jmx)

        ![img parta do arquivo no Jmeter](placeholder.png)

<br>

---

# 📘 Documentação

Para mais informações do projeto (desafio proposto, resolução, análise dos cenários, ideias de modificação, entre outros fatores) verifique o [relatório](./5-Documentacao_e_Relatorio_final/A3%20-%20Gestão%20e%20qualidade%20de%20software.pdf) oficial do projeto.

Caso tenha alguma sugestão, correção ou sugestão de melhorias, por favor entre em contato. 😊

<br>

---

# 👨‍💻 Colaboradores

<table>
    <tr>
        <td align=center>
            <a href="https://github.com/Sttarnix">
                <img src="https://avatars.githubusercontent.com/u/126365457?v=4" width=115px><br>
                <sub>Aiara Dorneles Claudio</sub>
            </a>
        </td>
        <td align=center>
            <a href="https://github.com/Anderson-Andy-Correa">
                <img src="https://avatars.githubusercontent.com/u/106445568?v=4" width=115px><br>
                <sub>Anderson Corrêa</sub>
            </a>
        </td>
        <td align=center>
            <a href="https://github.com/AndreLoppnow">
                <img src="https://avatars.githubusercontent.com/u/129698712?v=4" width=115px><br>
                <sub>André Felippe Loppnow</sub>
            </a>
        </td>
        <td align=center>
            <a href="https://github.com/gabrielpoleza">
                <img src="https://avatars.githubusercontent.com/u/128434647?v=4" width=115px><br>
                <sub>Gabriel Faustino Poleza</sub>
            </a>
        </td>
        <td align=center>
            <a href="https://github.com/2005LucasLongo">
                <img src="https://avatars.githubusercontent.com/u/107898034?v=4" width=115px><br>
                <sub>Lucas Longo</sub>
            </a>
        </td>
    </tr>
</table>

<br>

---

# 👨‍🎓 Professor / Orientador

<table>
    <tr>
        <td align=center>
            <a href="https://github.com/RandMelville">
                <img src="https://avatars.githubusercontent.com/u/16937328?v=4" width=115px><br>
                <sub>Randerson Melville</sub>
            </a>
        </td>
    </tr>
</table>
