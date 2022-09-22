<!-- PROJECT -->
<br />
<p align="center">
  <h2 align="center">Teste desenvolvedor fullstack</h2>

  <p align="center">
    Implementar API com NodeJs de um CRUD de produtos e categorias usando banco de dados relacional.
    <br />
    Implementar o frontend em React de um CRUD de produtos e categoria.
  </p>
</p>

### Tecnologias Utilizadas

O projeto foi criado usando as tecnologias:

- [Typescript]
- [NodeJs]
- [Prisma]
- [Apollo-server]
- [Graphql]

<!-- GETTING STARTED -->

A seguir estão as instruções para a instalação, configuração e uso do projeto.

### Configuração

1. Clonar o repositório

```sh
   git clone https://github.com/rodolfowolff/API-graphql-apollo-prisma
```

2. Configuração das variaveis de ambiente

- Criar um arquivo na raiz do projeto, chamado [.env].

- Copiar o conteúdo do arquivo [.env.example] e configurar os dados conforme seu banco de dados.

3. Comando do prisma para subir a tabela no banco de dados conforme o schema

```sh
npx prisma db push
```

4. Comando do prisma para geração

```sh
npx prisma generate
```

### Instalação e execução

1. Instalando os pacotes

```sh
    npm install
```

4. Executar localmente

```sh
    npm run dev
```

### Rodando aplicação localmente

No navegador, digitar <a href="http://localhost:4000/">http://localhost:4000/</a>.

### Comandos do prisma

npx prisma db push = esquema Prisma -> banco de dados

npx prisma db pull = banco de dados -> modelo esquema Prisma.

npx prisma generate = gera o Prisma Client com base no schema.

npx prisma migrate dev --name NOME_QUE_DESEJA_COLOCAR_PARA_ESSA_MIGRAÇÃO

### Query exemplo do prisma

```sh
query GetAllProducts {
  getAllProducts {
    products {
      name
      id
      code
      createdAt
      category {
        id
        name
      }
    }
  }
}
```

<!-- LINKS -->

### Frontend link do projeto

<a href="https://github.com/rodolfowolff/crud-vite">https://github.com/rodolfowolff/crud-vite</a>

<!-- CONTACT -->

## 🐺 👨‍💻 Desenvolvedor

- [Rodolfo Wolff](https://github.com/rodolfowolff)
