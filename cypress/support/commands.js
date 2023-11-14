Cypress.Commands.add('postUser', (user) => {
    cy.api({
        failOnStatusCode: false,
        method: 'POST',
        url: '/usuarios',
        body: {
          "nome": user.nome,
          "email": user.email,
          "password": user.password,
          "administrador": user.administrador
        }
      })
})

Cypress.Commands.add('getProducts', () => {
  cy.api({
    method: 'GET',
    url: '/produtos'
  })
})

Cypress.Commands.add('getProductById', (id) => {
  cy.api({
    failOnStatusCode: false,
    method: 'GET',
    url: `/produtos/${id}`
  })
})

Cypress.Commands.add('postProduct', (product) => {
  cy.api({
      failOnStatusCode: false,
      method: 'POST',
      url: '/produtos',
      headers: {
        Authorization: `${Cypress.env('authorization')}`
      },
      body: {
        "nome": product.nome,
        "preco": product.preco,
        "descricao": product.descricao,
        "quantidade": product.quantidade
      }
    })
})

Cypress.Commands.add('putProduct', (product, id) => {
  cy.api({
      method: 'PUT',
      url: `/produtos/${id}`,
      headers: {
        Authorization: `${Cypress.env('authorization')}`
      },
      body: {
        "nome": product.putNome,
        "preco": product.putPreco,
        "descricao": product.putDescricao,
        "quantidade": product.putQuantidade
      }
    })
})

Cypress.Commands.add('deleteProduct', (id) => {
  cy.api({
    method: 'DELETE',
    url: `/produtos/${id}`,
    headers: {
      Authorization: `${Cypress.env('authorization')}`
    }
  })
})

Cypress.Commands.add('login', (email, password) => {
  cy.api({
      failOnStatusCode: false,
      method: 'POST',
      url: '/login',
      body: {
        "email": email,
        "password": password
      }
    })
})