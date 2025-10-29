import { faker } from '@faker-js/faker'
//import user from '../fixtures/example.json';


class Login {
    preencherFormularioDePreCadastro(){
    
        cy.get('input[data-qa="signup-name"]').type(`${faker.person.firstName()} ${faker.person.lastName()}`)
        cy.get('input[data-qa="signup-email"]').type(`${ getRandomEmail() }`)
        cy.get('button[data-qa="signup-button"]').click()
}

    preencherFormularioDeLogin(UserActivation, pass){
        cy.get('input[data-qa="login-email"]').type(user)
        cy.get('input[data-qa="login-password"]').type(pass)
        cy.get('button[data-qa="login-button"]').click()
}
}
export default new Login();

