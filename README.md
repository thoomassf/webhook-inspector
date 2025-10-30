# Desafio Fullstack AI - Webhook Inspector

## Introdução


Este é um projeto fullstack que utiliza uma API em Node.js com Fastify e um frontend em React com Vite. O objetivo é fornecer uma solução completa, desde o backend até a interface do usuário.

## 🚀 Tecnologias Utilizadas

Este projeto é dividido em duas partes principais: o backend (`api`) e o frontend (`web`).

### Backend (API)
*   **Node.js**: Ambiente de execução para o servidor.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **Fastify**: Framework web focado em performance e baixo overhead.
*   **PNPM**: Gerenciador de pacotes rápido e eficiente.

### Frontend (Web)
*   **React**: Biblioteca para construção de interfaces de usuário.
*   **TypeScript**: Garante um código mais robusto e manutenível.
*   **Vite**: Ferramenta de build moderna que oferece um desenvolvimento extremamente rápido.
*   **PNPM**: Gerenciador de pacotes.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
*   Node.js (versão LTS recomendada)
*   PNPM

## 🏁 Como Começar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### 1. Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local usando o Git:

```js
git clone https://github.com/thoomassf/webhook-inspector.git
cd webhook-inspector
```

### 2. Configurando o Backend (API)

Agora, vamos instalar as dependências e iniciar o servidor da API.

```bash
# Acesse o diretório da API
cd api

# Instale as dependências
pnpm install

# Crie uma cópia do arquivo de variáveis de ambiente
# cp .env.example .env
# Em seguida, ajuste as variáveis no arquivo .env conforme necessário (ex: banco de dados)

# Execute as migrações do banco de dados (se aplicável)
# pnpm run db:migrate

# Inicie o servidor em modo de desenvolvimento
pnpm dev
```

O servidor da API estará rodando em `http://localhost:3333` (ou na porta configurada no seu `.env`).

### 3. Configurando o Frontend (Web)

Em um novo terminal, navegue até a pasta `web` para instalar as dependências e iniciar a aplicação React.

```bash
# Acesse o diretório do frontend (a partir da raiz do projeto)
cd web

# Instale as dependências
pnpm install

# Inicie a aplicação em modo de desenvolvimento
pnpm dev
```

A aplicação web estará disponível em `http://localhost:5173`.

---

Com isso, você terá tanto o backend quanto o frontend rodando localmente e prontos para o desenvolvimento!

