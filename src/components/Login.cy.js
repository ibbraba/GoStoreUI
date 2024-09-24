import Login from './Login.vue'

describe('<Login />', () => {
  it('Asks to fill fields if login', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Login)
    cy.get('input[name="input-pseudo"]').type("User")

    cy.get('.connect').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Veuillez renseigner les champs')
    })
  })


  it('Asks to fill fields if', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Login)
    cy.get('input[name="input-pseudo"]').type("User")

    cy.get('.register-button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Veuillez renseigner les champs')
    })
  })


})