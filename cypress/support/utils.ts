export class Utility {
    static getBaseUrl() {
        let miljø = Cypress.env('miljø');
        if (miljø == 'liberty') return 'https://forms.int.az.udiutv.no/en/dashboard';
        else if (miljø == 'organa-utv') return 'https://forms.int.az.udiutv.no/en/dashboard';
        else if (miljø == 'organa-test') return 'https://forms.int.az.udiutv.no/en/dashboard';
        else if (miljø == 'gitlab') return 'https://forms.int.az.udiutv.no/en/dashboard';
    }

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
