export class Utility {
  static getKjoremiljoOgVaultSecret(brukernavn: string) {
    const kjoremiljo = Cypress.env('kjoremiljo');

    if (kjoremiljo == 'gitlab') {
      const jwt = Cypress.env('ci.job.jwt');
      cy.getVaultToken('po_jwt', jwt);
    } else if (kjoremiljo == 'local') {
      const vaulttoken = Cypress.env('vault.token');
      cy.wrap(vaulttoken).as('vaulttoken');
    }

    cy.get('@vaulttoken').then((vaulttoken) => {
      cy.getVaultSecret(vaulttoken.toString(), 'app/politioperativt/test/annet/testbrukere_TUPP-test', brukernavn);
    });
  }
}
