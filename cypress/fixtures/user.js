const faker = require('faker-br');

export const user = {
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',

    putNome: faker.name.firstName()
}