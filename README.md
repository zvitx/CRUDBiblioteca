# Sistema de Controle Bibliotecário

## Visão Geral

Este projeto é uma aplicação de sistema de controle de uma biblioteca desenvolvida como um trabalho prático para a disciplina de Banco de Dados do curso de Sistemas de Informação. A aplicação tem como objetivo solucionar um problema de uma biblioteca, criando uma aplicação simples para gerenciamento de livros. A aplicação permite realizar as operações de Cadastro, Leitura, Atualização e Exclusão de livros, facilitando a gestão das obras e seu controle.

## Estrutura do Projeto

- **Backend:** Implementado em Node.js, com APIs REST para gerenciamento de livros e empréstimos.
- **Frontend:** HTML, CSS, e JavaScript para a interface do usuário.
- **Banco de Dados:** MySQL, com scripts SQL para criação e popular o banco de dados.


## Requisitos

- Node.js
- MySQL

## Funcionalidades
### 1.Lista de Livros
Essa função exibe todos os livros cadastrados na no sistema. A lista é apresentada de forma clara e objetiva, contendo as seguintes informações para cada livro:

ID: Identificador único do livro.
Título: Nome do livro.
Autor: Nome do autor do livro.
Cada livro na lista possui um botão de Deletar, que permite ao usuário remover o livro da base de dados. Ao clicar no botão de Deletar, o livro é excluído permanentemente do sistema, após uma confirmação da ação.

![image](https://github.com/user-attachments/assets/63c84af8-eab1-479c-8b87-2bbabf8dc07f)



## Como Clonar e Usar
Siga as instruções abaixo para clonar e configurar o projeto:

### 1. Clone o Repositório
No cmd siga as seguintes instruções:

git clone https://github.com/zvitx/CRUDBiblioteca.git

cd CRUDBiblioteca
### 2. Configurar o Back
- Navegue até o diretório backend:
  
cd backend
- Instale as dependências:
  
npm install

### 3. Configurar o Banco de Dados
- Certifique-se de ter o MySQL instalado e rodando.
- Execute os scripts SQL para criar e popular o banco de dados:
  
mysql -u root -p < ../sql/create_tables.sql

mysql -u root -p < ../sql/insert_data.sql

### 4. Inicie o Servidor

node server.js


### 5. Configurar o Front
Abra o arquivo index.html no navegador.

Agora é só usar :)
