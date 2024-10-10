import selectors from '../support/selectors';
import * as allure from 'allure-cypress';
import users from '../fixtures/users.json';
import { faker, fakerNB_NO } from '@faker-js/faker';
import { Utility } from '../support/utils';

///<reference types="cypress-iframe" />

describe('UDI Søknad', function () {
  before(function () {});

  beforeEach(function () {
    cy.login();
  });

  it('UDI Familiesøknad', function () {
    const self_first_name = faker.person.firstName();
    const self_middle_name = faker.person.middleName();
    const self_last_name = faker.person.lastName();
    const country = 'Afghanistan';
    const family_first_name = faker.person.firstName();
    const family_middle_name = faker.person.middleName();
    const family_last_name = faker.person.lastName();
    const self_email = faker.internet.email();
    const self_phone = '+4779098431';
    const norway_street_address = 'Gullhaugveien';
    const norway_zipcode = '0484';
    const norway_buildindNo = '1';

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
      selectors.self_first_and_middlename().type(self_first_name + ' ' + self_middle_name);
      selectors.self_lastname().type(self_last_name);
      selectors.self_country().type(country).type('{downArrow}').type('{enter}');
      selectors.checkcitizenship().click();
      selectors.familymember().type('My spouse').type('{downArrow}').type('{enter}');
      selectors.family_member_first_and_middlename().type(family_first_name + ' ' + family_middle_name);
      selectors.family_member_lastname().type(family_last_name);
      selectors.family_member_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Family member in Norway', () => {
      selectors.family_member_dob().type('26.07.1996');
      selectors.family_member_identity_number().type('26079644462');
      selectors.family_residence_permit_type().click();
      selectors.leve_sammen().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('your current situation', () => {
      selectors.residence_permit_in_another_country().click();
      selectors.current_country().type(country).type('{downArrow}').type('{enter}');
      selectors.who_delivers_documents().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('About you', () => {
      selectors.gender().click();
      selectors.self_dob().type('01.01.1990');
      selectors.place_of_birth().type('Kabul');
      selectors.country_of_birth().type(country).type('{downArrow}').type('{enter}');
      selectors.children().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Passport and ID', () => {
      selectors.passport_and_id().should('exist').click();
      selectors.passport().click();
      selectors.id_document().should('exist');
      selectors.id_document().type('Ordinary passport').type('{downArrow}').type('{enter}');
      selectors.issuing_office().type('Government of Afghanistan');
      selectors.document_number().type('AF1332123');
      selectors.issue_date().type('01.01.2015');
      selectors.expiry_date().type('01.01.2025');
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Contact and address', () => {
      selectors.phone_number().type(self_phone);
      selectors.email().type(self_email);
      selectors.street_name(0).type('Hamid Karzai 1');
      selectors.postal_code(0).type('110432');
      selectors.city(0).type('Kabul');
      selectors.country().type(country).type('{downArrow}').type('{enter}');

      //planned address in Norway
      selectors.planned_address.postal_code().type(norway_zipcode);
      selectors.planned_address.street_name().type(norway_street_address).type('{downArrow}').type('{enter}');
      selectors.house_number().type(norway_buildindNo).type('{downArrow}').type('{enter}');

      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Marital Status', () => {
      selectors.date().type('01.01.1998');
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Education', () => {
      selectors.highest_level_of_education().type('University / University college education, 4 years or less').type('{downArrow}').type('{enter}');
      selectors.country().type(country).type('{downArrow}').type('{enter}');
      selectors.completed_year_education().type('1995');
      selectors.mother_tongue().type('Arabic');
      selectors.additional_languages().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('More about the family member in Norway', () => {
      selectors.family_member_current_status().type('My family member has a job');
      selectors.family_member_current_status().type('{downArrow}').type('{enter}');
      selectors.family_member_another_source_salary().should('exist').click();
      //selectors.family_member_salary().click();
      selectors.married_before().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Meeting Point', () => {
      selectors.meeting_point().click();
      selectors.municipality().type('Oslo').type('{downArrow}').type('{enter}');
      selectors.select_police_station().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Documents', () => {
      selectors.bekreft().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
    });

    allure.step('Summary', () => {
      selectors.bekreft().click();
      selectors.saved().should('exist');
      selectors.pay_submit().should('exist').click();
    });

    allure.step('Payment using card', () => {
      cy.get('iframe')
        .its('0.contentDocument.body')
        .within(() => {
          cy.get('#registrationManualEmail').type('skirankumars31@gmail.com');
          cy.get('#registrationManualPostalCode').type('0484');
          cy.get('#registrationManualPhoneNumber').type('40532332');
          cy.get('#registrationManualFirstName').type('Testfam');
          cy.get('#registrationManualLastName').type('Testesen');
          cy.get('#registrationManualAddressLine1').type('Øvre Prinsdals Vei 38F');

          cy.get('iframe')
            .its('0.contentDocument.body')
            .within(() => {
              cy.get('#cardExpiryInput').click().type('12/25');
              cy.get('#cardCvcInput').click().type('123');
              cy.get('#cardNumberInput').click().type('4925000000000004');
            });

          cy.get('#consentOnMerchantTerms').click();
          cy.get('#btnPay').click();
        });
    });
  });
});
