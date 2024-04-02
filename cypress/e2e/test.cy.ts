import selectors from '../support/selectors';
import users from '../fixtures/users.json';
import { Utility } from '../support/utils';

describe('Sjekk bruker uten tilgang', function () {
  before(function () {});

  beforeEach(function () {
    cy.login();
  });

  it('PT-T418: Verifiser at brukere uten noen kontrollroms-roller ikke får logget inn i Kontrollrom.', { tags: ['@regression', 'PT-T418'] }, function () {
    selectors.myapplications().should('exist');
    selectors.family().click();
    selectors.familyimmigration().should('exist');
    selectors.nextpage().click();
    selectors.bekreft().check();
    selectors.nextpage().click();
    selectors.self_first_and_middlename().type('Test');
    selectors.self_lastname().type('Testesen');
    selectors.self_country().type('Afghanistan').type('{downArrow}').type('{enter}');
    selectors.checkcitizenship().click();
    selectors.familymember().type('My spouse').type('{downArrow}').type('{enter}');
    selectors.family_member_first_and_middlename().type('Testfam');
    selectors.family_member_lastname().type('Testesenfamily');
    selectors.family_member_country().type('Afghanistan').type('{downArrow}').type('{enter}');
    selectors.nextpage().click();

    //Family member in Norway
    selectors.family_member_dob().type('01.01.1990');
    selectors.family_member_identity_number().type('01019043256');
    selectors.family_residence_permit_type().click();
    selectors.leve_sammen().click();
    selectors.nextpage().click();

    //your current situation
    selectors.residence_permit_in_another_country().click();
    selectors.current_country().type('Afghanistan').type('{downArrow}').type('{enter}');
    selectors.nextpage().click();
  });
});
