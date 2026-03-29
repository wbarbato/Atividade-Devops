const express = require('express');
const { somar } = require('./soma');

const app = express();

app.get('/', (req, res) => {
    res.send('Aplicação rodando...');
});

app.get('/soma', (req, res) => {
    const { a, b } = req.query;

    // Validação dos parâmetros
    if (!a || !b) {
        return res.status(400).send('Os parâmetros "a" e "b" são obrigatórios!');
    }

    const numA = Number(a);
    const numB = Number(b);

    // Validação de número válido
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send('Os valores precisam ser numéricos!');
    }

    ///dificil essa materia


app.get('/dificil a materia ', (req, res) => {
    res.send


    const resultado = somar(numA, numB);

    res.send(`Resultado: ${resultado}`);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});