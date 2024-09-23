import { it } from 'vitest'
import Header from './Header.vue'
import HomePage from './HomePage.vue'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Header)

  })
s
 
})