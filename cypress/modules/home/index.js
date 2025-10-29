import { Faker } from "@faker-js/faker";

class Home{
     verificarAssinturaNaHome() {
       cy.get('h2').should('contain.text', 'Subscription')
       cy.get('input[type="email"]').type('teste-1761512734127@cypress.com')
       cy.get('button[type="submit"]').click()
}
}
export default new Home();