/// <reference types="cypress" />
import register from '../support/pages/register';

context('Cadastro', () => {
    it('cadastrar um novo usuário', () => {
        register.acessarRegistro();
        register.preencherFormularioRegistro();
        register.submeterRegistro();
    });
});