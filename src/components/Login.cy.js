import Login from './Login.vue'

describe('<Login />', () => {
  it('Asks to fill fields if', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Login)
    cy.get('input[name="input-pseudo"]').type("User")

    cy.get('.connect').click()
    expect().contain("Veuillez rensigner les champs")
  })

})