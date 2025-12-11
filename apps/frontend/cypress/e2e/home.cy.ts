describe('Página principal', () => {
    it('muestra el título y botón', () => {
        cy.visit('http://localhost:5173');
        cy.contains('Mi Proyecto Vite + React');
        cy.get('button').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('¡Haz clic!');
        });
    });
});