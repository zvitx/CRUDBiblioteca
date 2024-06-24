const Emprestimo = require('../models/emprestimo');
const Livro = require('../models/livro');

exports.getAll = (req, res) => {
  Emprestimo.getAll((err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
};

exports.create = (req, res) => {
  const newEmprestimo = req.body;
  Livro.getById(newEmprestimo.idlivro, (err, livro) => {
    if (err) {
      res.status(500).send(err);
    } else if (livro[0].status === 'emprestado') {
      res.status(400).send({ message: 'Livro já está reservado' });
    } else {
      Emprestimo.create(newEmprestimo, (err, result) => {
        if (err) res.status(500).send(err);
        else {
          Emprestimo.updateStatusLivro(newEmprestimo.idlivro, 'emprestado', (err2, result2) => {
            if (err2) res.status(500).send(err2);
            else res.send(result);
          });
        }
      });
    }
  });
};

exports.devolve = (req, res) => {
  const id = req.params.id;
  const devolucao = req.body;
  Emprestimo.devolve(id, devolucao, (err, result) => {
    if (err) res.status(500).send(err);
    else {
      Emprestimo.updateStatusLivro(devolucao.idlivro, 'disponível', (err2, result2) => {
        if (err2) res.status(500).send(err2);
        else {
          Emprestimo.delete(id, (err3, result3) => {
            if (err3) res.status(500).send(err3);
            else res.send(result3);
          });
        }
      });
    }
  });
};

exports.getEmprestados = (req, res) => {
  Emprestimo.getEmprestados((err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
};