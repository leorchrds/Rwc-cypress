const el=require('./element').ELEMENTS

class login {
    acessarLogin() {
        cy.visit('login')
    }
    PreencherFormulario() {
        cy.get(el.inputEmail).type("rwc-email@gmail.com")
        cy.get(el.inputPassword).type('12345678');
    }
    submeterFormulario() {
        cy.get(el.buttonSubmit).click();
    }
}

export default new login();