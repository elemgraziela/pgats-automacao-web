import { Faker } from "@faker-js/faker";

class Pagamento{
     efetuarPagamento() {
        cy.get('[data-qa="name-on-card"]').type('Teste Novo Usuario')
        cy.get('[data-qa="card-number"]').type('4111 1111 1111 1111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2025')
        cy.get('#submit').click()
}
}
export default new Pagamento();