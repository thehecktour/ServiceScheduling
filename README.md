# Sistema de Agendamento de Serviços

Este é um sistema de agendamento de serviços com **frontend em React** e **backend em Django REST Framework**. Ele permite que usuários se registrem, façam login, agendem serviços e acompanhem o histórico de agendamentos, com opção de **concluir** ou **cancelar** um agendamento.

## 🔧 Tecnologias Utilizadas

- **Frontend**: React + Redux Toolkit + TypeScript
- **Backend**: Django + Django REST Framework + Token Authentication
- **Gerenciamento de pacotes (backend)**: Poetry
- **Banco de dados**: SQLite
- **Containerização (opcional)**: Docker + Docker Compose

---

## ⚙️ Como Rodar o Projeto

### 1. Backend

Você pode executar o backend de duas formas:

#### ▶️ Opção 1: Rodar com Docker

```bash
docker-compose up --build
```

#### ▶️ Opção 2: Rodar sem Docker

```bash
poetry install
poetry run python manage.py migrate
poetry run python manage.py createsuperuser
poetry run python manage.py runserver
```

A API ficará disponível em: http://localhost:8000

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em: http://localhost:5173 (Vite)


📦 Endpoints Importantes da API

```bash
POST /api/register/ → Cadastro de novo usuário

POST /api/api-token-auth/ → Login (retorna token)

GET /api/appointments/ → Lista de agendamentos do usuário

POST /api/appointments/ → Cria novo agendamento

POST /api/appointments/{id}/complete/ → Marca agendamento como concluído

POST /api/appointments/{id}/cancel/ → Cancela o agendamento
```

⚠️ Os serviços disponíveis (Services) devem ser cadastrados manualmente via POST /api/services/.
Não há interface no frontend para criar serviços.
Recomendamos usar o painel de admin do Django (/admin) ou ferramentas como o Insomnia ou Postman para isso.


### 🧪 Dados de Teste

Você pode usar o Django Admin para adicionar serviços acessando:

```bash
http://localhost:8000/admin
```

Faça login com o superusuário criado com o comando createsuperuser.

### 📌 Observações

A autenticação é feita por Token (DRF Token Auth)

O frontend armazena o token no Redux e usa nos headers para chamadas autenticadas

Todas as ações (listar, criar, concluir e cancelar agendamentos) exigem autenticação

Cada usuário só pode ver seus próprios agendamentos

### 📂 Estrutura do Projeto

```bash
project/
│
├── backend/
│   ├── core/
│   ├── db.sqlite3
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── pyproject.toml
│   └── manage.py
│
├── frontend/
│   ├── src/
│   ├── vite.config.ts
│   └── package.json
```

### ✅ Funcionalidades Implementadas

```bash 
 Cadastro de usuário

 Login com token

 Agendamento de serviço

 Listagem do histórico de agendamentos

 Marcar agendamento como concluído

 Cancelar agendamento

 Proteção de rotas por autenticação
 ```

