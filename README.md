# Todo list

Esse projeto visa prover um exemplo de aplicação real contendo:

- Uma interface frontend construída em [React](https://reactjs.org/) utilizando o [CRA (Create React App)](https://create-react-app.dev/) em [Typescript](https://www.typescriptlang.org)
- Uma API RESTful construída com [Express](https://expressjs.com) em [Typescript](https://www.typescriptlang.org/) e que provê a capacidade de utilização de diversas estruturas de banco de dados sendo:
  - Persistência em memória, utilizando uma estrutura estática que simula uma base de dados
  - Persistência em arquivo, utilizando um arquivo local estático que simula uma base de dados
  - [MySQL](https://www.mysql.com) com acesso direto ao mesmo sem a utilização de algum ORM
  - [Sequelize](https://sequelize.org) + [MySQL](https://www.mysql.com) como ORM
  - [MongoDB](https://www.mongodb.com) com acesso direto ao mesmo sem a utilização de algum ORM
  - [Mongoose](https://mongoosejs.com) + [MongoDB](https://www.mongodb.com) como ORM

A intenção desse projeto é demonstrar a construção de uma aplicação backend sem a utilização de um framework definido como o NestJS ou qualquer outro que já tem sua estrutura pronta e que possibilita a personalização dos recursos sem perder a manutebilidade, capacidade de refatoração e simplicidade.

## Dependências

- [VSCode](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/engine/install)
- [Docker Compose](https://docs.docker.com/compose/install)


## Get started

1. Baixe o projeto utilizando o comando `git clone https://github.com/leandroluk/todo-list.git`
2. Acesse o diretório do projeto com o vscode
3. Execute no terminal o comando de instalação das dependências `npm install`
