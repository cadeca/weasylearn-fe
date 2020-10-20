describe('The Home Page', () => {
  beforeEach(() =>  {
    cy.kcLogin('admin', 'admin');
  });
  afterEach(() =>  {
    cy.kcLogout();
  });
  it('loads page and should render logged username', () =>  {
    cy.visit('/');
    cy.get('#username')
      .should('contain', 'admin');
  });
})
