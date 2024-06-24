CREATE DATABASE IF NOT EXISTS biblioteca_db;

USE biblioteca_db;

CREATE TABLE Livro (
    idlivro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    anopublic DATE,
    genero VARCHAR(45),
    status ENUM('disponível', 'emprestado') NOT NULL
);

CREATE TABLE Emprestimo (
    idemprestimo INT AUTO_INCREMENT PRIMARY KEY,
    idlivro INT,
    dataemprestimo DATE NOT NULL,
    datadevolucaoprevista DATE NOT NULL,
    datadevolucao DATE,
    FOREIGN KEY (idlivro) REFERENCES Livro(idlivro)
);
