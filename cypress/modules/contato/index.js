import userData from '../../fixtures/example.json';

class Contato {
    preencherFormularioDeContato(){
        cy.get('input[data-qa="name"]').type(userData.name);
        cy.get('input[data-qa="email"]').type(userData.email);
        cy.get('input[data-qa="subject"]').type(userData.subject);
        cy.get('textarea[data-qa="message"]').type(userData.message);

        // Seleciona o arquivo de fixtures - ajuste se quiser outro arquivo
        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');

        cy.get('[data-qa="submit-button"]').click();
    }
}

export default new Contato();