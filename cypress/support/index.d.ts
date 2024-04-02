declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to log in
         * @example cy.login()
         */
        login(): void;

        /**
         * Custom command to log in with credentials
         * @example cy.loginWithCredentials()
         */
        loginWithCredentials(brukernavn: string, passord: string): void;

        loginBySingleSignOn(): void;

        /**
         * Custom command to search for a clientname
         * @example cy.searchKlientWithinDistrict('Oslo','asdasd')
         */
        searchKlientWithinDistrict(district: string, clientname: string): void;

        /**
         * Custom command to search for a clientname
         * @example cy.searchKlient('asdasd')
         */
        searchKlient(clientname: string): void;

        /**
         * Custom command to edit an Arbeidstasjon
         * @example cy.redigereArbeidstasjon('1','Sample Arbeidstasjon')
         */
        redigereArbeidstasjon(posisjon: number, clientname: string): void;

        /**
         * Custom command to edit Position in an Arbeidstasjon
         * @example cy.redigereArbeidstasjon('1')
         */
        redigerePosisjonArbeidsstasjon(posisjon: number): void;

        /**
         * Custom command to edit clientname in an Arbeidstasjon
         * @example cy.redigereArbeidstasjon('Sample Arbeidstasjon')
         */
        redigereKlientArbeidsstasjon(clientname: string): void;

        /**
         * Custom command to register an Arbeidstasjon
         * @example cy.registrerArbeidstasjon(1,'asdasd')
         */
        registrerArbeidstasjon(posisjon: number, clientname: string): void;

        /**
         * Custom command to slett an Arbeidstasjon
         * @example cy.slettArbeidstasjon('Sample Arbeidstasjon')
         */
        slettArbeidstasjon(clientname: string): void;

        /**
         * Custom command to register an Arbeidstasjon
         * @example cy.ÅpneRedigeringsVindu('Oslo','Sample Arbeidstasjon')
         */
        ÅpneRedigeringsVindu(clientname: string): void;

        /**
         * Custom command to select a politi district
         * @example cy.velgOrganisasjon('Oslo')
         */
        velgOrganisasjon(district: string): void;

        /**
         * Custom command to get vault token
         * @example cy.getVaultToken(rolle:string, jwt: string)
         */
        getVaultToken(rolle: string, jwt: string): void;

        /**
         * Custom command to get vault token for a username via LDAP
         * @example cy.getPersonalVaultToken(username: string, passord: string)
         */
        getPersonalVaultToken(username: string, passord: string): void;

        /**
         * Custom command to get vault secret
         * @example cy.getVaultSecret(vaulttoken: string,path: string)
         */
        getVaultSecret(token: string, path: string, key: string): void;
    }
}
