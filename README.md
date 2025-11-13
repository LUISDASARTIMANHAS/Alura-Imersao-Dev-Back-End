# Imersão Dev Back-End - Instabytes

## Descrição

Este projeto é uma aplicação back-end desenvolvida durante a Imersão Dev da Alura. A aplicação simula uma versão simplificada do Instagram, chamada "Instabytes", permitindo o upload de imagens, criação de posts e a geração de descrições automáticas para as imagens utilizando a API do Google Gemini.

## Proposta

A proposta do projeto é construir uma API RESTful para uma rede social de compartilhamento de imagens, aplicando conceitos de Node.js, Express, MongoDB e integração com serviços de inteligência artificial.

## Objetivo

O objetivo principal é solidificar os conhecimentos em desenvolvimento back-end, desde a criação de rotas e controladores até a interação com um banco de dados NoSQL e a integração com APIs externas.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **Express.js:** Framework para construção de aplicações web e APIs.
- **MongoDB:** Banco de dados NoSQL para armazenamento dos posts.
- **Google Gemini AI:** Serviço de inteligência artificial para geração de descrições de imagens.
- **Multer:** Middleware para upload de arquivos.
- **Dotenv:** Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **CORS:** Middleware para habilitar o Cross-Origin Resource Sharing.

## Funcionalidades

- Listar todos os posts.
- Criar um novo post com descrição e imagem.
- Fazer upload de uma imagem.
- Gerar automaticamente uma descrição para a imagem enviada utilizando o Google Gemini.

## Endpoints da API

- `GET /posts`: Retorna todos os posts cadastrados.
- `POST /posts`: Cria um novo post.
- `POST /upload`: Faz o upload de uma imagem e cria um post associado.
- `PUT /upload/:id`: Atualiza um post existente, gerando uma nova descrição para a imagem.

## Instalação e Uso

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Imersao-Dev-Back-End.git
   cd Imersao-Dev-Back-End
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   STRING_CONEXAO=<sua_string_de_conexao_com_o_mongodb>
   GEMINI_API_KEY=<sua_api_key_do_google_gemini>
   ```

4. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3000`.