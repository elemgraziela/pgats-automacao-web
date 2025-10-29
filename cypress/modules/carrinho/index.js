import { de } from "@faker-js/faker"

class Carrinho {
    navegarParaCarrinho() {
    cy.get('a[href="/view_cart"]').click()
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()        
    cy.get('.modal-footer > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.col-sm-6 > .btn').click()
    cy.get(':nth-child(2) > .heading').should('contain.text', 'Address Details')
    cy.get('.form-control').type('Por favor, entregue entre 9h e 18h.')
    cy.get(':nth-child(7) > .btn').click()

   }
}
export default new Carrinho();