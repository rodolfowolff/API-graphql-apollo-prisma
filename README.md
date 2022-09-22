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

### Configurando

1. Criar um arquivo na raiz do projeto, chamado [.env].

2. Copiar o conteúdo do arquivo [.env.example] e setar com as configurações do seu banco de dados.

### Instalando

1. Clonar o repositório

```sh
   git clone https://github.com/rodolfowolff/API-graphql-apollo-prisma
```

2. Instalando os pacotes

```sh
    npm install
```

3. Variaveis de ambiente, renomear o arquivo .env.exampĺe para .env e altere se necessario a url e porta da API

```sh
PORT=4000
DATABASE_URL="postgresql://@usernameDB:userPasswordDB@urlDB:portDB/dbname?connection_limit=5&pool_timeout=20"
```

4. Comando do prisma para subir a tabela no banco de dados conforme o schema

```sh
npx prisma db push
```

5. Comando do prisma para gerar

```sh
npx prisma generate
```

6. Executar localmente

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

<!-- CONTACT -->

## 🐺 👨‍💻 Desenvolvedor

- [Rodolfo Wolff](https://github.com/rodolfowolff)
