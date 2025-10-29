import { faker } from '@faker-js/faker'
import { 
    getRandomNumber,
    getRandomEmail
 } from '../../support/helpers.js'


class Login {
    preencherFormularioDePreCadastro(){
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
    
        cy.get('input[data-qa="signup-name"]').type(`${faker.person.firstName()} ${faker.person.lastName()}`)
        cy.get('input[data-qa="signup-email"]').type(getRandomEmail())
        cy.get('button[data-qa="signup-button"]').click()
}

    preencherFormularioDeLogin(UserActivation, pass){
        cy.get('input[data-qa="login-email"]').type('teste-1761512734127@cypress.com')
        cy.get('input[data-qa="login-password"]').type('654321')
        cy.get('button[data-qa="login-button"]').click()
}
}
export default new Login();

