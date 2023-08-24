/// <reference types="cypress" />
import articles from "../support/pages/articles";
import routes from "../support/routes";

context('Publicação', () => {
    beforeEach(() => {
        cy.backgroundLogin();
        articles.acessarFormularioDeNovaPublicacao()
    });
    it('criar uma nova publicação', () => {
        articles.preencherFormulario();
        articles.submeterPublicacao();
        articles.validarCriacaoDaPublicacaoComSucesso();
    });
});