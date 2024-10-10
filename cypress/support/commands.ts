import selectors from './selectors';
import 'cypress-ntlm-auth/dist/commands';
import { Utility } from './utils';

Cypress.Commands.add('login', () => {
  cy.visit('');
  selectors.emailaddress().type('testpolitiet@udi.no');
  selectors.password().type('Politiettester456');
  selectors.loginwithpassword().click();
});
