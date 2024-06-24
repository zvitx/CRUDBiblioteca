const db = require('../database');

class Emprestimo {
  static getAll(callback) {
    db.query('SELECT * FROM Emprestimo', callback);
  }

  static create(data, callback) {
    const { idlivro, dataemprestimo, datadevolucaoprevista } = data;
    db.query(
      'INSERT INTO Emprestimo (idlivro, dataemprestimo, datadevolucaoprevista) VALUES (?, ?, ?)',
      [idlivro, dataemprestimo, datadevolucaoprevista],
      callback
    );
  }

  static devolve(id, data, callback) {
    const { datadevolucao } = data;
    db.query(
      'UPDATE Emprestimo SET datadevolucao = ? WHERE idemprestimo = ?',
      [datadevolucao, id],
      callback
    );
  }

  static getEmprestados(callback) {
    db.query(
      'SELECT Emprestimo.idemprestimo, Livro.titulo, Livro.autor, Emprestimo.dataemprestimo, Emprestimo.datadevolucaoprevista, Emprestimo.idlivro FROM Emprestimo JOIN Livro ON Emprestimo.idlivro = Livro.idlivro WHERE Emprestimo.datadevolucao IS NULL',
      callback
    );
  }

  static updateStatusLivro(idlivro, status, callback) {
    db.query(
      'UPDATE Livro SET status = ? WHERE idlivro = ?',
      [status, idlivro],
      callback
    );
  }

  static delete(id, callback) {
    db.query('DELETE FROM Emprestimo WHERE idemprestimo = ?', [id], callback);
  }
}

module.exports = Emprestimo;