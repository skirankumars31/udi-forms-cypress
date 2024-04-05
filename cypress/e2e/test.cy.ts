import selectors from '../support/selectors';
import * as allure from 'allure-cypress';
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

    allure.step('Introduction', () => {
      selectors.familyimmigration().should('exist');
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Rights and duties', () => {
      selectors.bekreft().check();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Two persons', () => {
      selectors.self_first_and_middlename().type('Test');
      selectors.self_lastname().type('Testesen');
      selectors.self_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.checkcitizenship().click();
      selectors.familymember().type('My spouse').type('{downArrow}').type('{enter}');
      selectors.family_member_first_and_middlename().type('Testfam');
      selectors.family_member_lastname().type('Testesenfamily');
      selectors.family_member_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Family member in Norway', () => {
      selectors.family_member_dob().type('01.01.1990');
      //selectors.family_member_identity_number().type('01019043256');
      selectors.family_residence_permit_type().click();
      selectors.leve_sammen().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('your current situation', () => {
      selectors.residence_permit_in_another_country().click();
      selectors.current_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.who_delivers_documents().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('About you', () => {
      selectors.gender().click();
      selectors.self_dob().type('01.01.1990');
      selectors.place_of_birth().type('Kabul');
      selectors.country_of_birth().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.children().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('More about the family member in Norway', () => {
      selectors.family_member_current_status().type('My family member has a job').type('{downArrow}').type('{enter}');
      selectors.family_member_another_source_salary().click();
      selectors.family_member_salary().click();
      selectors.married_before().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('More about the family member in Norway', () => {});
    allure.step('Documents', () => {
      selectors.bekreft().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Summary', () => {
      selectors.bekreft().click();
      selectors.saved().should('exist');
      selectors.submit().click();
    });

    allure.step('Passport and ID', () => {});
    allure.step('Contact and address', () => {});
    allure.step('Marital Status', () => {});
    allure.step('Education', () => {});
    allure.step('Meeting Point', () => {});
  });
});
