import { Faker } from "@faker-js/faker";

class Contato{
    preencherFormularioDeContato(){
    cy.get('input[data-qa="name"]').type(userData.name) 
    cy.get('input[data-qa="email"]').type(userData.email)
    cy.get('input[data-qa="subject"]').type(userData.subject)
    cy.get('textarea[data-qa="message"]').type(userData.message)

    cy.fixture('example.json').as('arquivo')
    cy.get('input[type=file]').selectFile('@arquivo')

    cy.get('[data-qa="submit-button"]').click() 
}
}
export default new Contato();