const db = require('../database');

class Livro {
  static getAll(callback) {
    db.query('SELECT * FROM Livro', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Livro WHERE idlivro = ?', [id], callback);
  }

  static create(data, callback) {
    const { titulo, autor, anopublic, genero, status } = data;
    db.query(
      'INSERT INTO Livro (titulo, autor, anopublic, genero, status) VALUES (?, ?, ?, ?, ?)',
      [titulo, autor, anopublic, genero, status],
      callback
    );
  }

  static update(id, data, callback) {
    const { titulo, autor, anopublic, genero, status } = data;
    db.query(
      'UPDATE Livro SET titulo = ?, autor = ?, anopublic = ?, genero = ?, status = ? WHERE idlivro = ?',
      [titulo, autor, anopublic, genero, status, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query('DELETE FROM Livro WHERE idlivro = ?', [id], callback);
  }
}

module.exports = Livro;