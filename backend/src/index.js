const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'API Moda & Estilo funcionando!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
const fs = require('fs');
const path = require('path');

// Criar tabelas automaticamente ao iniciar
async function initDatabase() {
    const schema = fs.readFileSync(path.join(__dirname, 'database', 'schema.sql'), 'utf8');
    await pool.query(schema);
    console.log('✅ Banco de dados inicializado');
}

initDatabase();
