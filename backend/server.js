const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const livroRoutes = require('./routes/livro');
const emprestimoRoutes = require('./routes/emprestimo');
app.use('/api/livros', livroRoutes);
app.use('/api/emprestimos', emprestimoRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});