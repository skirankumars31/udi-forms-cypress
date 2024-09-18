import selectors from '../support/selectors';
import * as allure from 'allure-cypress';
import users from '../fixtures/users.json';
import { Utility } from '../support/utils';

///<reference types="cypress-iframe" />

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
      //cy.pause();
    });

    allure.step('Rights and duties', () => {
      selectors.bekreft().check();
      selectors.saved().should('exist');
      selectors.nextpage().click();
      //cy.pause();
    });

    allure.step('Two persons', () => {
      selectors.self_first_and_middlename().type('Testfam');
      selectors.self_lastname().type('Testesen');
      selectors.self_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.checkcitizenship().click();
      selectors.familymember().type('My spouse').type('{downArrow}').type('{enter}');
      selectors.family_member_first_and_middlename().type('Testfam');
      selectors.family_member_lastname().type('Testesenfamily');
      selectors.family_member_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.saved().should('exist');
      selectors.nextpage().click();
      //cy.pause();
    });

    allure.step('Family member in Norway', () => {
      selectors.family_member_dob().type('01.01.1990');
      //selectors.family_member_identity_number().type('01019043256');
      selectors.family_residence_permit_type().click();
      selectors.leve_sammen().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
      //cy.pause();
    });

    allure.step('your current situation', () => {
      selectors.residence_permit_in_another_country().click();
      selectors.current_country().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.who_delivers_documents().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
      //cy.pause();
    });

    allure.step('About you', () => {
      selectors.gender().click();
      selectors.self_dob().type('01.01.1990');
      selectors.place_of_birth().type('Kabul');
      selectors.country_of_birth().type('Afghanistan').type('{downArrow}').type('{enter}');
      selectors.children().click();
      selectors.saved().should('exist');
      selectors.nextpage().click();
      //cy.pause();
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
      selectors.phone_number().type('+4740532332');
      selectors.email().type('test@testesen.com');
      selectors.street_name(0).type('Hamid Karzai 1');
      selectors.postal_code(0).type('110432');
      selectors.city(0).type('Kabul');
      selectors.country().type('Afghanistan').type('{downArrow}').type('{enter}');

      //planned address in Norway
      selectors.planned_address.postal_code().type('1263');
      selectors.planned_address.street_name().type('Øvre Prinsdals vei').type('{downArrow}').type('{enter}');
      selectors.house_number().type('38F').type('{downArrow}').type('{enter}');

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
      selectors.country().type('Afghanistan').type('{downArrow}').type('{enter}');
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
      //cy.origin('https://test.checkout.dibspayment.eu/', () => {
      // cy.frameLoaded('https://test.checkout.dibspayment.eu/');
      // cy.iframe().find('#registrationManualEmail').type('skirankumars31@gmail.com');
      //cy.get('#nets-checkout-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap).contains('Email').should('exist');
      cy.wait(60000);

      //iframe 1
      selectors.payment.iframe().find('#registrationManualEmail', { timeout: 60000 }).type('skirankumars31@gmail.com');
      selectors.payment.iframe().find('#registrationManualPostalCode').type('0484');
      selectors.payment.iframe().find('#registrationManualPhoneNumber').type('40532332');
      selectors.payment.iframe().find('#registrationManualFirstName').type('Testfam');
      selectors.payment.iframe().find('#registrationManualLastName').type('Testesen');
      selectors.payment.iframe().find('#registrationManualAddressLine1').type('Øvre Prinsdals Vei 38F');

      //iframe 2
      cy.wait(10000);
      selectors.payment.checkout_iframe1().find('#cardNumberInput').click().type('4925000000000004');
      selectors.payment.checkout_iframe1().find('#cardExpiryInput').click().type('12/25');
      selectors.payment.checkout_iframe1().find('#cardCvcInput').click().type('123');
      selectors.payment.iframe().find('#btnPay').click();

      cy.wait(60000);

      selectors.payment.approve_frame().find('#AuthenticationSuccessButton').click();

      // });
    });
  });
});
