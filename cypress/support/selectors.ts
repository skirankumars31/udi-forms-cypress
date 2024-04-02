export default {
  emailaddress: () => cy.get("#signInName"),
  password: () => cy.get("#password"),
  loginwithpassword: () => cy.contains("button", "Log in with password"),
  myapplications: () => cy.contains("div", "My applications"),
  familyimmigration: () => cy.contains("h1", "Family immigration"),
  nextpage: () => cy.contains("span", "Next page"),
  family: () => cy.contains("th", "Family").parent().find("a"),
  bekreft: () => cy.get('[type="checkbox"]'),

  //Samples
  klientnavnlabel: () => cy.contains("label", "Klientnavn"),
  brukerinfo: () => cy.get('[data="ci-bruker"]'),
  tabell: {
    operasjonssentral: () => cy.contains("a", "Operasjonssentral"),
    posisjon: () => cy.contains("a", "Posisjon"),
    klientnavn: () => cy.contains("a", "Klientnavn"),
  },
  klientnavn: () => cy.contains("label", "Klientnavn").parent().find("input"),
  posisjon: () => cy.contains("label", "Posisjon").parent().find("input"),
  modalklientnavn: () =>
    cy.get(".modal-content").contains("Klientnavn").parent().find("input"),
  organisasjonlabel: () => cy.contains("label", "Organisasjon"),
  organisasjon: () =>
    cy.contains("label", "Organisasjon").parent().find("select"),
  registerArbeidstasjon: () =>
    cy.contains("button", "Registrer arbeidsstasjon"),
  redigereArbeidstasjon: (klientnavn: string) =>
    cy.contains("td", klientnavn).siblings().contains("button", "Rediger"),
  slettArbeidstasjon: (klientnavn: string) =>
    cy.contains("td", klientnavn).siblings().contains("button", "Slett"),
  bekreftSletting: () => cy.contains("button", "Ja, slett arbeidsstasjon"),
  nullstill: () => cy.contains("button", "Nullstill"),
  søk: () => cy.contains("button", "Søk"),
  lagreendringer: () => cy.contains("button", "Lagre endringer"),
  opprettArbeidstasjon: () => cy.contains("button", "Opprett arbeidsstasjon"),
  avbrytOpprettArbeidstasjon: () => cy.contains("button", "Avbryt"),
  alertmelding: () => cy.get("melding"),
  cardtext: () => cy.get(".card-text"),
  arbeidsstasjonertabellråder: () => cy.get("arbeidsstasjoner-tabell tr"),
};
