const faker = require('faker-br');

export const product = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price(),
    descricao: faker.lorem.sentence(),
    quantidade: faker.random.number(),

    putNome: faker.commerce.productName(),
    putPreco: faker.commerce.price(),
    putDescricao: faker.lorem.sentence(),
    putQuantidade: faker.random.number()
}
