import selectors from "../support/selectors";
import users from "../fixtures/users.json";
import { Utility } from "../support/utils";

describe("Sjekk bruker uten tilgang", function () {
  before(function () {});

  beforeEach(function () {
    cy.login();
  });

  it(
    "PT-T418: Verifiser at brukere uten noen kontrollroms-roller ikke får logget inn i Kontrollrom.",
    { tags: ["@regression", "PT-T418"] },
    function () {
      selectors.myapplications().should("exist");
      selectors.family().click();
      selectors.familyimmigration().should("exist");
      selectors.nextpage().click();
      selectors.bekreft().check();
      selectors.nextpage().click();
    }
  );
});
