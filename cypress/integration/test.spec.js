describe('My Website', () => {
  it('should load the index page', () => {
    cy.visit('/')

  })

  it('should load the documentation page', () => {
    cy.visit('/docs.html')
  })

  it('should load the API page', () => {
    cy.visit('/api.html')
    
  })

  it('should load the quickstart page', () => {
    cy.visit('/quickstart.html')
  })
})
