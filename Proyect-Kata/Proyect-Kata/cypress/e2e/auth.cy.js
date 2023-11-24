describe('Funcionabilidad De Login ', () => {
  it('Carga Leyendo Home en /', () => {
    cy.visit('/Home')
    cy.get('h1')
      .contains('Home')
  })
  it('Probar el Login como CUSTOMER', () => {
    // Interceptor lo uso para saber cuando una llamada a API esta resulta y puedo esperarla en otro momento usando cy.wait()
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')

    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.doLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')
    // 03. Assert
    cy.get('h1').contains('Home')
  })
})
