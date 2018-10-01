describe('Failing test', () => {
    it('fails to load reader in iframe', () => {
        cy.visit('http://localhost:4200');
        cy.wait(3000);
    })

    it('loads reader stand alone', () => {
        cy.visit('http://localhost:4200/assets/webviewer/html5/ReaderControl.html');
        cy.wait(3000);
    })
})