/// <reference types="cypress" />
import login from '../support/pages/login';
const { faker } = require('@faker-js/faker');

context('Login',{browser:'chrome'}, () => {
    it('Realizar login com sucesso', () => {
        login.acessarLogin();
        login.PreencherFormulario();
        login.submeterFormulario();
    });
}); 