# Backend - CRUD de Tarefas

Este projeto é uma API desenvolvida em Node.js com Express para realizar operações de CRUD (Create, Read, Update e Delete) de tarefas.

## Tecnologias utilizadas
- Node.js
- Express
- Cors

## Estrutura do projeto
src/
- controllers/
  - taskController.js
- models/
  - taskModel.js
- routes/
  - taskRoutes.js
- app.js

Arquivos principais:
- server.js
- package.json

## Funcionalidades
- Cadastrar tarefa
- Listar tarefas
- Editar tarefa
- Excluir tarefa

## Rotas da API

### Listar tarefas
GET `/tasks`

### Cadastrar tarefa
POST `/tasks`

### Editar tarefa
PUT `/tasks/:id`

### Excluir tarefa
DELETE `/tasks/:id`

## Como executar o projeto

### 1. Instalar dependências
```bash
npm install

### 2 Rodar o Servidor

npm start
Servidor:http://localhost:3000
