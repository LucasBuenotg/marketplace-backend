const express = require('express');
const app = express();
const PORT = 3000; // definir a porta do servidor


app.use(express.json()); // resopnsavel por fazer parse do corpo das resquisições HTTP ormato json

let tarefas = [];

// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    // Lógica para adicionar uma nova tarefa ao banco de dados
    const tarefa = req.body;
    tarefas.push(tarefa);
    res.json(tarefa);
});

// Inicie o servidor Express:
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta em http://localhost:${PORT}`);
});