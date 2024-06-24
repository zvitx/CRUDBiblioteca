function loadPage(page) {
  const content = document.getElementById('content');
  if (page === 'livros') {
    fetch('http://localhost:5000/api/livros')
      .then(response => response.json())
      .then(data => {
        let html = '<h2>Lista de Livros</h2><ul>';
        data.forEach(livro => {
          html += `
            <li>
              Id livro: ${livro.idlivro} - ${livro.titulo} - ${livro.autor} <br><br>
              <button onclick="deleteLivro(${livro.idlivro})">Deletar</button>
            </li>`;
        });
        html += '</ul>';
        content.innerHTML = html;
      })
      .catch(error => console.error('Erro buscando livros:', error));
  } else if (page === 'novoLivro') {
    content.innerHTML = `
      <h2>Adicionar Livro</h2>
      <form id="novoLivroForm">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required>
        <label for="autor">Autor:</label>
        <input type="text" id="autor" name="autor" required>
        <label for="anopublic">Ano de Publicação:</label>
        <input type="date" id="anopublic" name="anopublic">
        <label for="genero">Gênero:</label>
        <input type="text" id="genero" name="genero">
        <label for="status">Status:</label>
        <select id="status" name="status">
          <option value="disponível">Disponível</option>
          <option value="emprestado">Emprestado</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    `;
    document.getElementById('novoLivroForm').onsubmit = function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });
      fetch('http://localhost:5000/api/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        alert('Livro adicionado com sucesso!');
        loadPage('livros');
      })
      .catch(error => console.error('Erro adicionando livro:', error));
    };
  } else if (page === 'novoEmprestimo') {
    content.innerHTML = `
      <h2>Registrar Empréstimo</h2>
      <form id="novoEmprestimoForm">
        <label for="idlivro">ID do Livro:</label>
        <input type="text" id="idlivro" name="idlivro" required>
        <label for="dataemprestimo">Data de Empréstimo:</label>
        <input type="date" id="dataemprestimo" name="dataemprestimo" required>
        <label for="datadevolucaoprevista">Data de Devolução Prevista:</label>
        <input type="date" id="datadevolucaoprevista" name="datadevolucaoprevista" required>
        <button type="submit">Registrar</button>
      </form>
    `;
    document.getElementById('novoEmprestimoForm').onsubmit = function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });
      fetch('http://localhost:5000/api/emprestimos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        alert('Empréstimo registrado com sucesso!');
        loadPage('livros');
      })
      .catch(error => console.error('Error adding emprestimo:', error));
    };
  } else if (page === 'livrosEmprestados') {
    fetch('http://localhost:5000/api/emprestimos/emprestados')
      .then(response => response.json())
      .then(data => {
        let html = '<h2>Livros Emprestados</h2><ul>';
        data.forEach(emp => {
          const formattedDateEmprestimo = new Date(emp.dataemprestimo).toLocaleDateString('pt-BR');
          const formattedDateDevolucaoPrevista = new Date(emp.datadevolucaoprevista).toLocaleDateString('pt-BR');
          html += `<li>${emp.titulo} - ${emp.autor} (Data de Empréstimo: ${formattedDateEmprestimo}, Previsão de Devolução: ${formattedDateDevolucaoPrevista}) <button onclick="darBaixa(${emp.idemprestimo}, ${emp.idlivro})">Dar Baixa</button></li>`;
        });
        html += '</ul>';
        content.innerHTML = html;
      })
      .catch(error => console.error('Erro buscando emprestimos:', error));
  }
}

function deleteLivro(id) {
  if (confirm('Tem certeza que deseja deletar este livro?')) {
    fetch(`http://localhost:5000/api/livros/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      alert('Livro deletado com sucesso!');
      loadPage('livros');
    })
    .catch(error => console.error('Erro deletando livro:', error));
  }
}

function darBaixa(idemprestimo, idlivro) {
  const data = {
    idlivro: idlivro,
    datadevolucao: new Date().toISOString().split('T')[0]
  };
  fetch(`http://localhost:5000/api/emprestimos/${idemprestimo}/devolve`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    alert('Livro devolvido com sucesso!');
    loadPage('livrosEmprestados');
  })
  .catch(error => console.error('Erro devolvendo livro:', error));
}