const { faker } = require('@faker-js/faker');
const el = require('./element').ELEMENTS

class register {

    acessarRegistro() {
        cy.visit('register');
    }
    preencherFormularioRegistro() {
        cy.get(el.inputUserName).type(faker.internet.userName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(faker.internet.password());
    }
    submeterRegistro() {
        cy.get(el.buttonSubmit).click();
    }
}

export default new register();  