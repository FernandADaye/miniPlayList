describe('Funcionabilidad De Login ', () => {
  it('Carga Leyendo Home en /', () => {
    cy.visit('/Home')
    cy.get('h1')
      .contains('Home')
  })
})
