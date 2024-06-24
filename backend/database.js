const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '032004',
  database: 'biblioteca_db'
});

connection.connect(error => {
  if (error) {
    console.error('Erro na conexão com o banco de dados', error);
    process.exit(1);
  } else {
    console.log('Conectado no banco de dados com sucesso');
  }
});

module.exports = connection;