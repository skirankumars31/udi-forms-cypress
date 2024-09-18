import selectors from '../support/selectors';
import * as allure from 'allure-cypress';
import users from '../fixtures/users.json';
import { Utility } from '../support/utils';

///<reference types="cypress-iframe" />

describe('Sjekk bruker uten tilgang', function () {
  before(function () {});

  beforeEach(function () {});

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('PT-T418: Verifiser at brukere uten noen kontrollroms-roller ikke får logget inn i Kontrollrom.', { tags: ['@regression', 'PT-T418'] }, function () {
    allure.step('Payment using card', () => {
      cy.visit('/hostedpaymentpage/?checkoutKey=195baef25de64685b916e63e876ae950&pid=78649b708345476a8c418ce08321f6b7');

      cy.wait(20000);

      cy.visit('/hostedpaymentpage/?checkoutKey=195baef25de64685b916e63e876ae950&pid=78649b708345476a8c418ce08321f6b7');

      //iframe 1
      selectors.payment.iframe().find('#registrationManualEmail', { timeout: 60000 }).type('skirankumars31@gmail.com');
      selectors.payment.iframe().find('#registrationManualPostalCode').type('0484');
      selectors.payment.iframe().find('#registrationManualPhoneNumber').type('40532332');
      selectors.payment.iframe().find('#registrationManualFirstName').type('Testfam');
      selectors.payment.iframe().find('#registrationManualLastName').type('Testesen');
      selectors.payment.iframe().find('#registrationManualAddressLine1').type('Øvre Prinsdals Vei 38F');

      //iframe 2
      selectors.payment.checkout_iframe1().should('exist');
      selectors.payment.checkout_iframe2().should('exist');
      selectors.payment.checkout_iframe3().should('exist');
    });
  });
});
