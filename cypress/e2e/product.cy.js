const { product } = require("../fixtures/product")
const { user } = require("../fixtures/user")

describe('CRUD - PRODUTO', () => {
    before(() => {
        cy.postUser(user).then((res) => {
            expect(res.status).to.eql(201)
            expect(res.body.message).to.eql('Cadastro realizado com sucesso')
        })

        cy.login(user.email, user.password).then((res) => {
            expect(res.status).to.eql(200)
            expect(res.body.message).to.eql('Login realizado com sucesso')
            Cypress.env('authorization', res.body.authorization)
        })

    })
      
    it('deve cadastrar produto com sucesso', () => {
        cy.postProduct(product).then((res) => {
            expect(res.status).to.eql(201)
            expect(res.body.message).to.eql('Cadastro realizado com sucesso')
            Cypress.env('productId', res.body._id)
        })
    })

    it('deve buscar produto por ID com sucesso', () => {
        let id = Cypress.env('productId')

        cy.getProductById(id).then((res) => {
            expect(res.status).to.eql(200)
            expect(res.body.nome).to.equal(product.nome)

            let resBodyPreco = parseFloat(res.body.preco).toFixed(2)
            
            expect(resBodyPreco).to.equal(product.preco)
            expect(res.body.descricao).to.equal(product.descricao)
            expect(res.body.quantidade).to.equal(product.quantidade)
            expect(res.body._id).to.eql(Cypress.env('productId', res.body._id))
          })
    })

    it('deve editar produto por ID com sucesso', () => {
        let id = Cypress.env('productId')

        cy.putProduct(product, id).then((res) => {
            expect(res.status).to.eql(200)
            expect(res.body.message).to.equal('Registro alterado com sucesso')
          })
      
          cy.log('buscando produto pelo ID')
          
          cy.getProductById(id).then((res) => {
            expect(res.status).to.eql(200)
            expect(res.body.nome).to.equal(product.putNome)

            let resBodyPreco = parseFloat(res.body.preco).toFixed(2)

            expect(resBodyPreco).to.equal(product.putPreco)
            expect(res.body.descricao).to.equal(product.putDescricao)
            expect(res.body.quantidade).to.equal(product.putQuantidade)
            expect(res.body._id).to.eql(Cypress.env('productId', res.body._id))
          })
    })

    it('deve excluir produto por ID com sucesso', () => {
        let id = Cypress.env('productId')

        cy.deleteProduct(id).then((res) => {
            expect(res.status).to.eql(200)
            expect(res.body.message).to.equal('Registro excluído com sucesso')
        })
      
        cy.log('validando que o produto foi excluido, consultando pelo ID')
      
        cy.getProductById(id).then((res) => {
            expect(res.status).to.eql(400)
            expect(res.body.message).to.equal('Produto não encontrado')
        })
    })

    // it.skip('deve listar produtos cadastrados com sucesso', () => {
    //     cy.getProducts().then((res) => {
    //         expect(res.status).to.eql(200)
    //     })
    // })
})

describe('Testes funcionais - PRODUTO', () => {
    it('Não deve cadastrar produto com nome já utilizado', () => {
      cy.postProduct(product).then((res) => {
        expect(res.status).to.eql(201)
        expect(res.body.message).to.eql('Cadastro realizado com sucesso')
        Cypress.env('productId', res.body._id)
      })
  
      cy.log('tentativa de cadastro de produto com nome duplicado')
  
      cy.postProduct(product).then((res) => {
        expect(res.status).to.eql(400)
        expect(res.body.message).to.eql('Já existe produto com esse nome')
      })
    })

    it.skip('Não deve excluir produto que faz parte de carrinho', () => {

    })

    it.skip('Se não encontrado usuário com o ID informado realiza novo cadastro ao invés de alteração', () => {
    })
  })