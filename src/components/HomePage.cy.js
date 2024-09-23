import { it } from 'vitest'
import HomePage from './HomePage.vue'

describe('<HomePage />', () => {
  it('renders', () => {
    cy.mount(HomePage)
 //   cy.intercept('GET', '/*', { fixture: 'example.json' })

  })


})