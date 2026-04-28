-- Tabela de Produtos
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    tamanho VARCHAR(10),
    cor VARCHAR(30),
    preco DECIMAL(10,2) NOT NULL,
    quantidade INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados iniciais
INSERT INTO produtos (nome, categoria, tamanho, cor, preco, quantidade) VALUES
('Camiseta Básica', 'Feminino', 'M', 'Branca', 49.90, 25),
('Calça Jeans', 'Feminino', 'G', 'Azul', 129.90, 12),
('Vestido Floral', 'Feminino', 'P', 'Vermelho', 89.90, 8);

INSERT INTO clientes (nome, telefone, email) VALUES
('Ana Silva', '(11) 99999-1111', 'ana@email.com'),
('Carlos Souza', '(11) 99999-2222', 'carlos@email.com');
