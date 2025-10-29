import { faker } from '@faker-js/faker';

class Cadastro{
    preencherFormularioDeCadastroCompleto(){
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
}
}
export default new Cadastro();