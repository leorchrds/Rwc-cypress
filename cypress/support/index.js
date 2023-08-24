// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('backgroundLogin', () => {

    // PROCESSO DE LOGIN EM BACKGROUND 
    //1. realizar uma requisição do tipo POST com email e senha
    //2. capturar o token que pe recebido na nossa requisição
    //3. armazenar o token recebido no localstorage


    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users/login',
        // url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user: {
                email: 'rwc-email@gmail.com',
                password: '12345678'
            }
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})
import Routes from './routes'
before(()=>{
    Routes.init()
})