# Cypress
 
Projeto de exemplo para realização de testes de API utilizando Cypress. Testando o ServeRest API. Você pode visualizar os reports gerados em integração contínua [aqui](https://sarahfso.github.io/serv-rest-api-test/).
 
## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [ServeRest](https://serverest.dev/ "ServeRest")
 
## Tutorial, Instalação e execução
 
### Executar este projeto em sua máquina
 
* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:
 
**Instalar as dependências:**  
```
npm i
```
 
### Tutorial para iniciar um novo projeto utilizando esta estrutura
 
* Dentro da pasta específica para o projeto:
```
npm init -y
```
* Instalar a última versão do cypress e cypress-cucumber-preprocessor:
```
npm i cypress -D
npm i @bahmutov/cy-api -D
```
* Somente para o report:  
```
npm i cypress-mochawesome-reporter
npm i cypress-multi-reporters
npm i mochawesome
npm i mochawesome-merge
npm i mochawesome-report-generator
``` 
* Em um terminal execute o comando abaixo para abrir o cypress:
```
cypress open 
```
 
### Trick
 
* Você pode abrir o projeto utilizando o `npx`:
```
npx cypress open
```
 
### Reports
Você pode visualizar os reports gerados [aqui](https://sarahfso.github.io/serv-rest-api-test/).
