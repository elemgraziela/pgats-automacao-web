///<reference types="cypress" />

import userData from '../fixtures/example.json';

import menu from '../modules/menu/index.js';
import login from '../modules/login/index.js';
import cadastro from '../modules/cadastro/index.js';
import contato from '../modules/contato/index.js';
import home from '../modules/home/index.js';
import pagamento from '../modules/pagamento/index.js';
import carrinho from '../modules/carrinho/index.js';
import produto from '../modules/produto/index.js'; 

describe('Automation Exercise Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Logs', () => {
        cy.log('Log simples'); 
        console.log('Log no console do navegador');

        cy.log(`getRandomNumber(): ${getRandomNumber()}`);
        cy.log(`getRandomEmail(): ${getRandomEmail()}`);

        cy.log(`FullName: ${faker.person.fullName()}`);
        cy.log(`Company: ${faker.company.name()}`);

        cy.log(`Nome do usuário: ${userData.name}`);
        cy.log(`Email do usuário: ${userData.email}`);
    });      

    it('Cadastrar um usuário', () => {
        menu.navegarParaLogin();
        login.preencherFormularioDePreCadastro();
        cadastro.preencherFormularioDeCadastroCompleto();

        cy.url().should('include', '/account_created');
        cy.contains('b', 'Account Created!');
    });

    it('Fazer login de usuário com e-mail e senha corretos', () => {
        menu.navegarParaLogin();
        login.preencherFormularioDeLogin(userData.email, userData.password);

        cy.get('i.fa-user').parent().should('contain', userData.name);
        cy.get('a[href="/logout"]').should('be.visible');
    });

    it('Fazer login de usuário com e-mail e senha incorretos', () => {
        menu.navegarParaLogin();
        login.preencherFormularioDeLogin('teste-1761512734127@cypress.com', '654321');

        cy.get('p').should('contain.text', 'Your email or password is incorrect!');
    });

    it('Fazer logout de usuário', () => {
        menu.navegarParaLogin();
        login.preencherFormularioDeLogin(userData.email, userData.password);
        menu.efetuarLogout();

        cy.url().should('include', '/login');
    });

    it('Cadastrar usuário com e-mail existente', () => {
        menu.navegarParaLogin();
        login.preencherFormularioDeLogin('teste-1761512734127@cypress.com', '123456');

        cy.get('p').should('contain.text', 'Email Address already exist!');
    });

    it('Formulário de contato', () => {
        menu.navegarParaLogin();
        contato.preencherFormularioDeContato();

        cy.get('.status').should('be.visible');
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    });

    it('Consultar detalhes do produto', () => {
        menu.navegarParaProdutos();
        produto.navegarParaProdutoDetalhes();

        cy.get('.product-information').should('be.visible');
    });

    it('Pesquisar produto', () => {
        menu.navegarParaProdutos();
        produto.pesquisarProduto();

        cy.get('.features_items').should('contain.text', 'Dress');
    });

    it('Verificar assinatura na home page', () => {
        home.verificarAssinaturaNaHome();

        cy.get('#success-subscribe').should('contain.text', 'You have been successfully subscribed!');
    });

    it('Fazer um pedido e Registrar-se antes de finalizar a compra', () => {
        const timestamp = new Date().getTime();

        menu.navegarParaLogin();
        cadastro.preencherFormularioDeCadastroCompleto();

        cy.url().should('include', '/account_created');
        cy.contains('b', 'Account Created!');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('b', 'Teste Novo Usuario');

        carrinho.navegarParaCarrinho();
        pagamento.efetuarPagamento();

        cy.get('p').should('contain.text', 'Congratulations! Your order has been confirmed!');

        menu.deletarConta();

        cy.contains('b', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    });
});