//<reference types="cypress" />

import userData from '../fixtures/example.json'
import { 
    getRandomNumber,
    getRandomEmail
 } from '../support/helpers.js'

 import {fa, faker} from '@faker-js/faker'

describe('Automation Exercise Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('Logs', () => {
        cy.log('Log simples'); 
        console.log('Log no console do navegador');

        cy.log(`getRandomNumber(): ${ getRandomNumber()}`)
        cy.log(`getRandomEmail(): ${ getRandomEmail()}`);

        cy.log('FullName: ${faker.person.fullName()}');
        cy.log('Company: ${faker.company.name()}');

        cy.log(`Nome do usuário: ${userData.name}`);
        cy.log(`Email do usuário: ${userData.email}`);

    });      

    it('Cadastrar um usuário', () => {
        
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="signup-name"]').type('Teste Cypress')
        cy.get('input[data-qa="signup-email"]').type(`${ getRandomEmail() }`)
        cy.get('button[data-qa="signup-button"]').click()

        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[data-qa="password"]').type('123456', { log: false })
        cy.get('select[data-qa="days"]').select('10')
        cy.get('select[data-qa="months"]').select('May')
        cy.get('select[data-qa="years"]').select('1990')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('input[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('input[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('input[data-qa="company"]').type(faker.company.name())
        cy.get('input[data-qa="address"]').type(faker.location.streetAddress())
        cy.get('select#country').select('Canada')
        cy.get('input[data-qa="state"]').type(faker.location.state())
        cy.get('input[data-qa="city"]').type(faker.location.city())
        cy.get('input[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('input[data-qa="mobile_number"]').type(faker.phone.number())
        cy.get('button[data-qa="create-account"]').click()

        cy.url().should('include', '/account_created')
        cy.contains('b', 'Account Created!')
    })

    
    it('Fazer login de usuário com e-mail e senha corretos', () => {
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="login-email"]').type('teste-1761512734127@cypress.com')
        cy.get('input[data-qa="login-password"]').type('123456', { log: false })
        cy.get('button[data-qa="login-button"]').click()
        cy.get('i.fa-user').parent().should('contain.text', 'Teste Cypress')

        cy.get('a[href="/logout"]').should('be.visible')
        
});

    it('Fazer login de usuário com e-mail e senha incorretos', () => {
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="login-email"]').type('teste-1761512734127@cypress.com')
        cy.get('input[data-qa="login-password"]').type('654321', { log: false })
        cy.get('button[data-qa="login-button"]').click()
        cy.get('p').should('contain.text', 'Your email or password is incorrect!')

});


    it('Fazer logout de usuário', () => {
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="login-email"]').type('teste-1761512734127@cypress.com')
        cy.get('input[data-qa="login-password"]').type('123456', { log: false })
        cy.get('button[data-qa="login-button"]').click()
        cy.get('i.fa-user').parent().should('contain.text', 'Teste Cypress')
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.url().should('include', '/login')
        
});

    it('Cadastrar usuário com e-mail existente', () => {
        cy.get('a[href="/login"]').click()

        cy.get('input[data-qa="signup-name"]').type('Teste Cypress')
        cy.get('input[data-qa="signup-email"]').type('teste-1761512734127@cypress.com', { log: false })
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('p').should('contain.text', 'Email Address already exist!')
        
});

    it('Formulário de contato', () => {
       cy.get('a[href="/contact_us"]').click()

       cy.get('input[data-qa="name"]').type(userData.name) 
       cy.get('input[data-qa="email"]').type(userData.email)
       cy.get('input[data-qa="subject"]').type('Dúvida sobre produtos')
       cy.get('textarea[data-qa="message"]').type(userData.message)

       cy.fixture('example.json').as('arquivo')
       cy.get('input[type=file]').selectFile('@arquivo')

       cy.get('[data-qa="submit-button"]').click() 

       cy.get('.status').should('be.visible')
       cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
       
});
    it('Consultar detalhes do produto', () => {
      
       cy.get('a[href="/products"]').click()
       cy.get('a[href="/product_details/1"]').click()

});

    it('Pesquisar produto', () => {
       
       cy.get('a[href="/products"]').click()
       cy.get('#search_product').type('Dress')
       cy.get('#submit_search').click()
       cy.get('.features_items').should('contain.text', 'Dress')
});
    it('Verificar assinatura na home page', () => {
       
       cy.get('h2').should('contain.text', 'Subscription')
       cy.get('input[type="email"]').type('teste-1761512734127@cypress.com')
       cy.get('button[type="submit"]').click()
       cy.get('#success-subscribe').should('contain.text', 'You have been successfully subscribed!')
});
    //
    it('Fazer um pedido e Registrar-se antes de finalizar a compra', () => {
       const timestamp = new Date().getTime();
       
       cy.get('a[href="/login"]').click()
       cy.get('input[data-qa="signup-name"]').type('Teste Novo Usuario')
       cy.get('input[data-qa="signup-email"]').type(`${getRandomEmail()}`)
       cy.get('button[data-qa="signup-button"]').click()

        cy.get('input[type=radio]').check('Mr')
        cy.get('input[data-qa="password"]').type('456789', { log: false })
        cy.get('select[data-qa="days"]').select('25')
        cy.get('select[data-qa="months"]').select('December')
        cy.get('select[data-qa="years"]').select('1998')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('input[data-qa="first_name"]').type('Teste Novo')
        cy.get('input[data-qa="last_name"]').type('Usuario')
        cy.get('input[data-qa="company"]').type('Empresa dois')
        cy.get('input[data-qa="address"]').type('Rua Pirulito, 12')
        cy.get('select#country').select('Canada')
        cy.get('input[data-qa="state"]').type('Ontario')
        cy.get('input[data-qa="city"]').type('Toronto')
        cy.get('input[data-qa="zipcode"]').type('90001')
        cy.get('input[data-qa="mobile_number"]').type('123 456 789')
        cy.get('button[data-qa="create-account"]').click()

        cy.url().should('include', '/account_created')
        cy.contains('b', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('b', 'Teste Novo Usuario')

        
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()        
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(2) > .heading').should('contain.text', 'Address Details')
        cy.get('.form-control').type('Por favor, entregue entre 9h e 18h.')
        cy.get(':nth-child(7) > .btn').click()
        
        cy.get('[data-qa="name-on-card"]').type('Teste Novo Usuario')
        cy.get('[data-qa="card-number"]').type('4111 1111 1111 1111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2025')
        cy.get('#submit').click()
        cy.get('p').should('contain.text', 'Congratulations! Your order has been confirmed!')

        cy.get('a[href="/delete_account"]').click()
        cy.contains('b', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()

    });

});