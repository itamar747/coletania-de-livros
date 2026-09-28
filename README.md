# 📚 API de Livros

API REST simples para cadastro e consulta de livros, desenvolvida com **Node.js** e **Express.js**.
Os dados são armazenados **em memória** (array), portanto são reiniciados sempre que o servidor é reiniciado.

## Requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node.js)

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/api-livros.git

# 2. Entre na pasta do projeto
cd api-livros

# 3. Instale as dependências
npm install
```

## Executando

```bash
npm start
```

A API ficará disponível em **http://localhost:3000**.

Para reiniciar automaticamente ao salvar arquivos (modo desenvolvimento, Node 18.11+):

```bash
npm run dev
```

Para usar outra porta: `PORT=4000 npm start` (Linux/macOS) ou `set PORT=4000 && npm start` (Windows CMD).

## Modelo de dados

```json
{
  "id": 1,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899
}
```

| Campo    | Tipo    | Descrição                                   |
|----------|---------|---------------------------------------------|
| `id`     | número  | Gerado automaticamente pela API             |
| `titulo` | texto   | Obrigatório                                 |
| `autor`  | texto   | Obrigatório                                 |
| `ano`    | inteiro | Obrigatório (ano de publicação)             |

## Rotas

| Método | Rota           | Descrição                  | Sucesso        | Erros       |
|--------|----------------|----------------------------|----------------|-------------|
| GET    | `/livros`      | Lista todos os livros      | `200 OK`       | —           |
| GET    | `/livros/:id`  | Consulta um livro pelo ID  | `200 OK`       | `404`       |
| POST   | `/livros`      | Cadastra um novo livro     | `201 Created`  | `400`       |
| PUT    | `/livros/:id`  | Atualiza um livro          | `200 OK`       | `400`, `404`|
| DELETE | `/livros/:id`  | Exclui um livro            | `204 No Content` | `404`     |

## Exemplos de uso (curl)

**Listar todos os livros**

```bash
curl http://localhost:3000/livros
```

**Consultar um livro pelo ID**

```bash
curl http://localhost:3000/livros/1
```

**Cadastrar um livro**

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Vidas Secas", "autor": "Graciliano Ramos", "ano": 1938}'
```

**Atualizar um livro**

```bash
curl -X PUT http://localhost:3000/livros/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1900}'
```

**Excluir um livro**

```bash
curl -X DELETE http://localhost:3000/livros/1
```

> Também é possível testar com ferramentas como **Postman**, **Insomnia** ou a extensão **Thunder Client** do VS Code.

## Exemplo de resposta de erro

```json
{ "erro": "Livro não encontrado." }
```

## Estrutura do projeto

```
api-livros/
├── index.js        # Servidor e rotas
├── package.json
├── .gitignore
└── README.md
```

## Tecnologias

- Node.js
- Express.js
