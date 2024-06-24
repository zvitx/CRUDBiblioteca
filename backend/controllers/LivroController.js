const Livro = require('../models/livro');

exports.getAll = (req, res) => {
  Livro.getAll((err, results) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Livro.getById(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send(result);
  });
};

exports.create = (req, res) => {
  const newLivro = req.body;
  Livro.create(newLivro, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send(result);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updatedLivro = req.body;
  Livro.update(id, updatedLivro, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send(result);
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Livro.delete(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send(result);
  });
};