import selectors from './selectors';

export default {
  emailaddress: () => cy.get('#signInName'),
  password: () => cy.get('#password'),
  loginwithpassword: () => cy.contains('button', 'Log in with password'),
  passport_and_id: () => cy.contains('button', 'Passport and ID'),
  myapplications: () => cy.contains('div', 'My applications'),
  familyimmigration: () => cy.contains('h1', 'Family immigration'),
  previouspage: () => cy.contains('span', 'Previous page'),
  select_police_station: () => cy.contains('span', 'Oslo police district, Service Center for Foreign Workers').parent().find('input'),
  nextpage: () => cy.contains('span', 'Next page'),
  submit: () => cy.contains('button', 'Submit'),
  pay_submit: () => cy.contains('button', 'Pay and submit'),
  logout: () => cy.contains('span', 'Log out'),
  self_first_and_middlename: () => cy.contains('div', 'What is the name of the person who wants to live in Norway?').parent().contains('label', 'First (and middle) name').parent().find('input'),
  self_lastname: () => cy.contains('div', 'What is the name of the person who wants to live in Norway?').parent().contains('label', 'Last name').parent().find('input'),
  country: () => cy.contains('div', 'Country').parent().parent().find('input'),
  email: () => cy.contains('div', 'What is your email address?').parent().find('input'),
  phone_number: () => cy.contains('div', 'What is your phone number?').parent().find('input'),
  street_name: (index: number) => cy.contains('div', 'Street name').eq(index).parent().find('input'),
  house_number: () => cy.contains('div', 'House number and letter').parent().find('input'),
  payment: {
    iframe: () => cy.get('#nets-checkout-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap),
    approve_frame: () => cy.get('#nets-checkout-inception-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap),
    checkout_iframe1: () => selectors.payment.iframe().find('#easy-checkout-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap),
    checkout_iframe2: () => selectors.payment.iframe().get('#easy-checkout-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap),
    checkout_iframe3: () => cy.get('#easy-checkout-iframe').should('exist').its('0.contentDocument.body').should('not.be.undefined').should('be.visible').then(cy.wrap),
    email: () => cy.get('#registrationManualEmail'),
    postal_code: () => cy.get('#registrationManualPostalCode'),
    phone_number: () => cy.get('#registrationManualPhoneNumber'),
    first_name: () => cy.get('#registrationManualFirstName'),
    last_name: () => cy.get('#registrationManualLastName'),
    address: () => cy.get('#registrationManualAddressLine1'),
    credit_card_number: () => cy.get('#CreditCardNumber'),
    expiry: () => cy.get('#cardExpiryInput'),
    cvc: () => cy.get('#text-box'),
    pay: () => cy.get('#btnPay'),
  },
  planned_address: {
    planned_address: (index: number) => cy.contains('div', 'What is your planned address in Norway?'),
    postal_code: () => cy.contains('p', 'Enter the postal code.').parent().find('input'),
    street_name: () => cy.contains('div', 'Enter or select the name of the street.').parent().find('input'),
  },
  postal_code: (index: number) => cy.contains('div', 'Postal code').eq(index).parent().find('input'),
  mother_tongue: () => cy.contains('div', 'Mother tongue').parent().find('input'),
  city: (index: number) => cy.contains('div', 'City or place').eq(index).parent().find('input'),
  self_country: () => cy.contains('div', 'Which country are you a citizen of?').parent().contains('label', 'Country').parent().find('input'),
  family_member_country: () => cy.contains('div', 'Which country is the family member in Norway a citizen of?').parent().contains('label', 'Country').parent().find('input'),
  family_member_current_status: () => cy.contains('div', 'What is your family member in Norway doing?').parent().contains('label', 'Select what your family member is doing').parent().find('input'),
  checkcitizenship: () => cy.contains('div', 'Do you have more than one citizenship?').parent().find('label').contains('No'),
  additional_languages: () => cy.contains('div', 'Do you speak any additional languages?').parent().find('label').contains('No'),
  family: () => cy.contains('th', 'Family').parent().find('a'),
  familymember: () => cy.contains('label', 'Family member').parent().find('input'),
  place_of_birth: () => cy.contains('label', 'Place of birth').parent().find('input'),
  bekreft: () => cy.get('[type="checkbox"]'),
  family_member_first_and_middlename: () => cy.contains('div', 'What is the name of the family member in Norway?').parent().contains('label', 'First (and middle) name').parent().find('input'),
  family_member_lastname: () => cy.contains('div', 'What is the name of the family member in Norway?').parent().contains('label', 'Last name').parent().find('input'),
  leve_sammen: () => cy.contains('div', 'Are you going to live together in Norway?').parent().find('label').contains('Yes'),
  married_before: () => cy.contains('div', 'Has your partner been married to a person from the same country as you in the past?').parent().contains('span', 'No'),
  children: () => cy.contains('div', 'Do you have children of your own?').parent().contains('span', 'No'),
  id_document: () => cy.contains('div', 'Which type of ID document are you applying with?').parent().find('input'),
  issuing_office: () => cy.contains('div', 'Issuing office/authorithy').parent().find('input'),
  passport: () => cy.contains('div', 'Do you have an ID document / passport?').parent().contains('span', 'Yes'),
  gender: () => cy.contains('div', 'What is your gender?').parent().contains('span', 'Female'),
  family_member_salary: () => cy.contains('div', 'Did the family member in Norway earn more than 300 000 Norwegian kroner before tax last year?').parent().contains('span', 'Yes'),
  family_member_another_source_salary: () => cy.contains('div', 'Did your family member have another source of income last year?').parent().contains('span', 'No'),
  meeting_point: () => cy.contains('div', 'Are you applying from Norway or from abroad?').parent().contains('span', 'From Norway'),
  residence_permit_in_another_country: () => cy.contains('div', 'Do you have a residence permit in another EU/EEA country than Norway?').parent().contains('span', 'No'),
  family_residence_permit_type: () => cy.contains('div', 'What kind of residence permit does the family member who lives in Norway have?').parent().contains('span', 'Work'),
  who_delivers_documents: () => cy.contains('div', 'Who will be handing in your application documents?').parent().contains('span', 'I will hand in my application documents myself'),
  family_member_identity_number: () => cy.contains('div', 'National identity number or D number (OPTIONAL)').parent().find('input'),
  municipality: () => cy.contains('div', 'Municipality').parent().find('input'),
  current_country: () => cy.contains('div', 'Which country do you live in now?').parent().find('input'),
  country_of_birth: () => cy.contains('div', 'Which country were you born in?').parent().find('input'),
  highest_level_of_education: () => cy.contains('div', 'Choose education').parent().find('input'),
  completed_year_education: () => cy.contains('div', 'Year').parent().find('input'),
  family_member_dob: () => cy.contains('div', 'Birth date in the format DD.MM.YYYY').parent().find('input'),
  self_dob: () => cy.contains('div', 'Birth date in the format DD.MM.YYYY').parent().find('input'),
  date: () => cy.contains('div', 'Date using the format DD.MM.YYYY').parent().find('input'),
  issue_date: () => cy.contains('div', 'Issue date').parent().find('input'),
  expiry_date: () => cy.contains('div', 'Expiry date').parent().find('input'),
  document_number: () => cy.contains('div', 'The number of the ID document').parent().find('input'),
  saved: () => cy.contains('div', 'We have saved your answers.'),
};
