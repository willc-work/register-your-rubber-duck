describe('Register Your Rubber Duck 🦆', () => {
  it('User can name and confirm a duck', () => {
    // Visit homepage
    cy.visit('http://localhost:3000/');

    // Click the Start button
    cy.contains('Start').click();

    // Check that we’re on the name your duck page
    cy.contains('Name Your Duck');

    // Enter a duck name
    cy.get('input[name="duckName"]').type('Commander Quack');

    // Submit the form
    cy.contains('Continue').click();

    // Should land on confirmation page
    cy.contains('Confirm your duck');
    cy.contains('Commander Quack');
    cy.contains('Unique ID');
    cy.contains('Confirm registration');
  });

  it('Shows error if duck name is blank', () => {
    cy.visit('http://localhost:3000/name-your-duck');
    cy.contains('Continue').click();
    cy.contains('Enter your duck’s name');
  });
});
