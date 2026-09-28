const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

let livros = [
  { id: 1, titulo: 'Grande Sertão Veredas', autor: 'Joao Guimaraes Rosa', ano: 1956 },
  { id: 2, titulo: 'As Aventuras do Barão de Munchausen', autor: 'Rudolf Erich Raspe', ano: 1785 },
  { id: 3, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605 }
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/livros', (req, res) => {
  res.json(livros);
});

app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find(item => item.id === id);

  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  res.json(livro);
});

app.post('/livros', (req, res) => {
  const { titulo, autor, ano } = req.body;

  const novoId = livros.length > 0 ? livros[livros.length - 1].id + 1 : 1;

  const novoLivro = {
    id: novoId,
    titulo,
    autor,
    ano: Number(ano)
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  const { titulo, autor, ano } = req.body;

  livros[index] = {
    id,
    titulo,
    autor,
    ano: Number(ano)
  };

  res.json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  livros.splice(index, 1);
  res.json({ mensagem: 'Livro apagado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});