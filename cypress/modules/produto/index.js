import { Faker } from "@faker-js/faker";

class Produto{
     navegarParaProdutoDetalhes() {
        cy.get('a[href="/product_details/1"]').click()
    }

     pesquisarProduto() {
        cy.get('#search_product').type('Dress')
        cy.get('#submit_search').click()
    }
}
export default new Produto();