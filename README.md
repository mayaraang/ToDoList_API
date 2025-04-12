
# To-Do List API

Esta é uma API simples de gerenciamento de tarefas (To-Do List) construída com Node.js e SQLite. 

A API permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar tarefas, permitindo a criação, atualização e exclusão de itens da lista.


## Principais tecnologias utilizadas

- Node.js: Para construir a API.
- Express: Framework web para Node.js, utilizado para facilitar o roteamento e gerenciamento de requisições HTTP.
- SQLite: Banco de dados leve para persistência de dados.
- Body-Parser: Middleware para análise do corpo das requisições HTTP (em formato JSON).
- Express-Validator: Biblioteca de middleware para validação de dados em requisições HTTP.


## Rodando localmente

### 1. Clone o repositório do projeto
```bash
  git clone https://github.com/mayaraang/ToDoList_API.git
```

### 2. Navegue para o diretório do projeto
```bash
  cd ToDoList_API
```

### 3. Instale as dependências
```bash
  npm install
```

### 4. Inicie o servidor e acesse a API
```bash
  npm run start
```

### *Para iniciar no modo de desenvolvimento*
```bash
  npm run dev
```


## Endpoints da API

### Criar uma tarefa
```http
  POST  /api/tasks/
```
### Listar todas as tarefas
```http
  GET  /api/tasks/
```
### Visualizar uma tarefa pelo ID
```http
  GET  /api/tasks/:id
```
### Atualizar uma tarefa
```http
  PATCH  /api/tasks/:id
```
### Excluir uma tarefa
```http
  DELETE  /api/tasks/:id
```


## Autoria

- Mayara Angélica - [@mayaraang](https://github.com/mayaraang)