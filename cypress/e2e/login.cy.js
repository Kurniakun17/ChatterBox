/* eslint-disable max-len */
/* eslint-disable no-undef */

/**
 * test scenario for user login flow
 *
 *  - The criteria of success on this test:
 *    - should display login page correctly
 *    - should display alert when email empty
 *    - should display alert when password empty
 *    - should visit homepage when login sucess
 */

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="EMAIL"]').should('be.visible');
    cy.get('input[placeholder="PASSWORD"]').should('be.visible');
    cy.get('button')
      .contains(/^LOG IN$/)
      .should('be.visible');
  });

  it('should display alert when email empty', () => {
    cy.get('button')
      .contains(/^LOG IN$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password empty', () => {
    cy.get('input[placeholder="EMAIL"]').type('testtttt@gmail.com');
    cy.get('button')
      .contains(/^LOG IN$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should visit homepage when login sucess', () => {
    cy.get('input[placeholder="EMAIL"]').type('cypress123@gmail.com');
    cy.get('input[placeholder="PASSWORD"]').type('cypress123');
    cy.get('button')
      .contains(/^LOG IN$/)
      .click();

    cy.get('button').contains('LOGOUT').should('be.visible');
  });
});
