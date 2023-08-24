const { faker } = require('@faker-js/faker');
const el = require('./element').ELEMENTS
import Routes from '../../routes';

class Articles {
    acessarFormularioDeNovaPublicacao() {
        //acessar a pagina de criação do formulario
        cy.get(el.linkNovaPublicacao).click();
    }
    preencherFormulario() {
        //preencher formulario do artigo
        cy.get(el.inputTitle).type(faker.lorem.word());
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContext).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('#Cypress');
    }
    submeterPublicacao() {
    
        //submeter publicação do artigo
        cy.get(el.buttonSubmit).click();
    }
    validarCriacaoDaPublicacaoComSucesso() {
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(201)
        });
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        });
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        });

    }
}
export default new Articles()