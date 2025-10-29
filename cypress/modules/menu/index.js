import { de } from "@faker-js/faker"

class Menu {
    navegarParaLogin() {
    cy.get('a[href="/login"]').click()
   }

   efetuarLogout() {
     cy.get('a[href="/logout"]').should('be.visible').click()
  }

    navegarParaProdutos() {
         cy.get('a[href="/products"]').click()
    }

    deletarConta() {
      cy.get('a[href="/delete_account"]').click()
}
}
export default new Menu();