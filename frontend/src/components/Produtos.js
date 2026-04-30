import React, { useState } from 'react';

function Produtos() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Camiseta Básica', categoria: 'Feminino', tamanho: 'M', cor: 'Branca', preco: 49.90, quantidade: 25 },
        { id: 2, nome: 'Calça Jeans', categoria: 'Feminino', tamanho: 'G', cor: 'Azul', preco: 129.90, quantidade: 12 },
        { id: 3, nome: 'Vestido Floral', categoria: 'Feminino', tamanho: 'P', cor: 'Vermelho', preco: 89.90, quantidade: 8 },
        { id: 4, nome: 'Blusa de Seda', categoria: 'Feminino', tamanho: 'M', cor: 'Rosa', preco: 79.90, quantidade: 15 },
    ]);

    const [novoProduto, setNovoProduto] = useState({ nome: '', categoria: 'Feminino', tamanho: 'M', cor: '', preco: '', quantidade: '' });
    const [busca, setBusca] = useState('');

    const adicionarProduto = () => {
        if (!novoProduto.nome || !novoProduto.preco) return alert('Preencha nome e preço');
        const novo = { ...novoProduto, id: produtos.length + 1, preco: parseFloat(novoProduto.preco), quantidade: parseInt(novoProduto.quantidade) };
        setProdutos([...produtos, novo]);
        setNovoProduto({ nome: '', categoria: 'Feminino', tamanho: 'M', cor: '', preco: '', quantidade: '' });
    };

    const produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div>
            <h2>👕 Gerenciamento de Produtos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                {/* Formulário */}
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                    <h3>➕ Novo Produto</h3>
                    <input type="text" placeholder="Nome" value={novoProduto.nome} onChange={e => setNovoProduto({ ...novoProduto, nome: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <select value={novoProduto.categoria} onChange={e => setNovoProduto({ ...novoProduto, categoria: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }}><option>Feminino</option><option>Masculino</option><option>Infantil</option></select>
                    <select value={novoProduto.tamanho} onChange={e => setNovoProduto({ ...novoProduto, tamanho: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }}><option>PP</option><option>P</option><option>M</option><option>G</option><option>GG</option></select>
                    <input type="text" placeholder="Cor" value={novoProduto.cor} onChange={e => setNovoProduto({ ...novoProduto, cor: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="number" placeholder="Preço (R$)" value={novoProduto.preco} onChange={e => setNovoProduto({ ...novoProduto, preco: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="number" placeholder="Quantidade" value={novoProduto.quantidade} onChange={e => setNovoProduto({ ...novoProduto, quantidade: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <button onClick={adicionarProduto} style={{ background: '#667eea', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>➕ Adicionar</button>
                </div>

                {/* Lista */}
                <div>
                    <input type="text" placeholder="🔍 Buscar produto..." value={busca} onChange={e => setBusca(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr style={{ background: '#667eea', color: 'white' }}><th style={{ padding: '10px' }}>Nome</th><th>Tam</th><th>Cor</th><th>Preço</th><th>Qtd</th></tr></thead>
                        <tbody>
                            {produtosFiltrados.map(p => (
                                <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '8px' }}>{p.nome}</td><td>{p.tamanho}</td><td>{p.cor}</td><td>R$ {p.preco.toFixed(2)}</td><td>{p.quantidade}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Produtos;
