describe('template spec', () => {
  it('should add to cart', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[id=checkbox-electronics]').click();

    cy.get('[data-testid=searchInput]').type('Sandisk');

    cy.wait(1000);
    cy.get(`[data-testid=add-to-cart10]`).click();
    cy.wait(1000);

    cy.get('[data-testid=ShoppingCartOutlinedIcon').click({ multiple: true });

    cy.contains('span', 'Total');

    cy.contains('h3', 'Seu Carrinho');
  });

  it('should paginate', () => {
    cy.visit('http://localhost:3000/');

    cy.wait(1000);
    cy.get('[data-testid=ArrowForwardIosOutlinedIcon]').click();
  });
});
