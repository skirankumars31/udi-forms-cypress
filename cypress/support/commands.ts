import selectors from './selectors';
import 'cypress-ntlm-auth/dist/commands';
import { Utility } from './utils';

Cypress.Commands.add('getVaultToken', (rolle, jwt) => {
  const requestbody = { role: rolle, jwt: jwt };

  cy.request({
    method: 'POST',
    url: 'https://vault.politiet.no/v1/auth/jwt-gitlab-prod/login',
    headers: { 'Content-Type': 'application/json' },
    body: requestbody,
  }).then(function (response) {
    const vaulttoken = response.body.auth.client_token;
    cy.wrap(vaulttoken).as('vaulttoken');
  });
});

Cypress.Commands.add('getPersonalVaultToken', (username, passord) => {
  const requestbody = { password: passord };

  cy.request({
    method: 'POST',
    url: 'https://vault.politiet.no/v1/auth/ldap-bid/login/' + username,
    headers: { 'Content-Type': 'application/json' },
    body: requestbody,
  }).then(function (response) {
    const vaulttoken = response.body.auth.client_token;
    cy.wrap(vaulttoken).as('vaulttoken');
  });
});

Cypress.Commands.add('getVaultSecret', (token, path, key) => {
  cy.request({
    method: 'GET',
    url: 'https://vault.politiet.no/v1/secret-v2/data/' + path,
    headers: { 'X-Vault-Token': token },
  }).then(function (response) {
    const responseBody = response.body.data.data;
    cy.wrap(responseBody[key]).as('secret');
  });
});

Cypress.Commands.add('login', () => {
  const url = Utility.getBaseUrl();
  cy.visit(url);
  selectors.emailaddress().type('testpolitiet@udi.no');
  selectors.password().type('Politiettester456');
  selectors.loginwithpassword().click();
});

Cypress.Commands.add('loginWithCredentials', (brukernavn, passord) => {
  let url = Utility.getBaseUrl();

  let env = Cypress.env('miljø');
  if (env == 'organa-test') cy.ntlm(['logginn-t.politiet.no'], brukernavn, passord, 'pit-test');
  else if (env == 'organa-utv') cy.ntlm(['logginn-t.politiet.no'], brukernavn, passord, 'pit-test');
  if (env == 'liberty') url = url + '/pov-kontrollrom-app/app';

  cy.visit(url);
});

Cypress.Commands.add('loginBySingleSignOn', (overrides = {}) => {
  const options = {
    method: 'POST',
    url: 'https://logginn-t.politiet.no/',
    qs: {
      // use qs to set query string to the url that creates
      // http://auth.corp.com:8080?redirectTo=http://localhost:7074/set_token
      redirectTo: 'http://localhost:7074/set_token',
    },
    form: true, // we are submitting a regular form body
    body: {
      username: 'xxxx',
      password: 'xxx',
    },
  };
  // allow us to override defaults with passed in overrides
  Cypress._.extend(options, overrides);

  cy.request(options);
});
