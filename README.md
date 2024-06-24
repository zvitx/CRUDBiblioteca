# Sistema de Gestão de Biblioteca

## Visão Geral

Este projeto é uma aplicação de sistema de controle de uma biblioteca desenvolvida como um trabalho prático para a disciplina de Banco de Dados do curso de Sistemas de Informação. A aplicação permite o gerenciamento de livros, empréstimos e devoluções, fornecendo uma interface para cadastro, visualização, exclusão e relatórios sobre os livros.

## Estrutura do Projeto

- **Backend:** Implementado em Node.js, com APIs REST para gerenciamento de livros e empréstimos.
- **Frontend:** HTML, CSS, e JavaScript para a interface do usuário.
- **Banco de Dados:** MySQL, com scripts SQL para criação e popular o banco de dados.


## Requisitos

- Node.js
- MySQL

## Funcionalidades
Gerenciamento de Livros: Adicionar, editar, excluir e listar livros.
Empréstimos: Registrar empréstimos, listar livros emprestados, dar baixa nos empréstimos.
Relatórios: Gerar relatórios de livros emprestados



## Como Clonar e Usar
Siga as instruções abaixo para clonar e configurar o projeto:

### 1. Clone o Repositório
No cmd siga as seguintes instruções:

git clone https://github.com/USERNAME/REPOSITORY_NAME.git
cd GestaoBiblioteca

2. Configurar o Back
- Navegue até o diretório backend:
cd backend
- Instale as dependências:
npm install

3. Configurar o Banco de Dados
- Certifique-se de ter o MySQL instalado e rodando.
- Execute os scripts SQL para criar e popular o banco de dados:
mysql -u root -p < ../sql/create_tables.sql
mysql -u root -p < ../sql/insert_data.sql

4. Inicie o Servidor
node server.js


5. Configurar o Front
Abra o arquivo index.html no navegador.

Agora é só usar :)
