function cadastrarJogo() {
  const name = document.getElementById('name').value;
  const genre = document.getElementById('gender').value;
  const description = document.getElementById('description').value;
  const squad = document.getElementById('squad').value;
  let url = document.getElementById('url').textContent;
  let thumbnailpath = document.getElementById('thumbnailpath').value;
  // Remover o prefixo "http://"
  url = url.replace(/^https?:\/\//, '');
  thumbnailpath = thumbnailpath.replace(/^https?:\/\//, '');
  
  const requestBody = {
      name,
      genre,
      description,
      squad,
      url,
      thumbnailpath
  };

  fetch('http://localhost:8080/jogos/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  })
      .then(response => response.json())
      .then(data => {
          alert('Jogo cadastrado com sucesso!');
          document.getElementById('cadastroForm').reset();
           location.reload();
      })
      .catch(error => {
          console.error('Erro ao cadastrar jogo:', error);
      });
}

function excluirJogo() {
  const name = document.getElementById('name').value;
  const genre = document.getElementById('gender').value;
  const description = document.getElementById('description').value;
  const squad = document.getElementById('squad').value;
  let url = document.getElementById('url').textContent;
  let thumbnailpath = document.getElementById('thumbnailpath').value;
  // Remover o prefixo "http://"
  url = url.replace(/^https?:\/\//, '');
  thumbnailpath = thumbnailpath.replace(/^https?:\/\//, '');
  
  const requestBody = {
      name,
      genre,
      description,
      squad,
      url,
      thumbnailpath
  };

  fetch('http://localhost:8080/jogos/create', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  })
      .then(response => response.json())
      .then(data => {
          alert('Jogo excluido com sucesso!');
          document.getElementById('cadastroForm').reset();
           location.reload();
      })
      .catch(error => {
          console.error('Erro ao deletar o jogo:', error);
      });
}



function ListarJogos() {
  fetch(`http://localhost:8080/jogos`)
      .then(response => {
          if (response.status === 404) {
              return Promise.reject('Lista de Jogos não encontrada');
          }
          return response.json();
      })
      .then(data => {

          const tbodyElement = document.getElementById('jogos-tabela').querySelector('tbody');
          tbodyElement.innerHTML = '';

          // Preenche a tabela com os resultados da pesquisa
          data.forEach(jogo => {
            const linhaJogo = document.createElement('tr');
            linhaJogo.innerHTML = `
                <td>${jogo.id}</td>
                <td>${jogo.genre}</td>
                <td style="white-space: pre-line;">${jogo.description}</td>
                <td>${jogo.squad}</td>
                <td style="white-space: pre-line;">${jogo.members}</td>
                <td>${jogo.url}</td>           
                <td><a href="https://${jogo.thumbnailpath}">Acesse a imagem</a></td>
            `;
            tbodyElement.appendChild(linhaJogo);
        });  
      })
      // Trata os Erros
      .catch(error => {
          console.error('Erro ao pesquisar funcionário:', error);
          const resultadoPesquisa = document.getElementById('resultadoPesquisa');
          resultadoPesquisa.innerHTML = 'Jopo não encontrado.';
      });
}



