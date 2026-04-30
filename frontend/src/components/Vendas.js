import React, { useState } from 'react';

function Vendas() {
    const [carrinho, setCarrinho] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState('');
    const [clientes] = useState(['Ana Silva', 'Carlos Souza', 'Mariana Lima']);
    const [produtos] = useState([
        { id: 1, nome: 'Camiseta Básica', preco: 49.90, estoque: 25 },
        { id: 2, nome: 'Calça Jeans', preco: 129.90, estoque: 12 },
    ]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(produtos[0]);
    const [quantidade, setQuantidade] = useState(1);
    const [vendas, setVendas] = useState([]);

    const adicionarAoCarrinho = () => {
        if (!produtoSelecionado) return;
        const itemExistente = carrinho.find(i => i.id === produtoSelecionado.id);
        if (itemExistente) {
            setCarrinho(carrinho.map(i => i.id === produtoSelecionado.id ? { ...i, quantidade: i.quantidade + quantidade, subtotal: (i.quantidade + quantidade) * i.preco } : i));
        } else {
            setCarrinho([...carrinho, { ...produtoSelecionado, quantidade, subtotal: quantidade * produtoSelecionado.preco }]);
        }
        setQuantidade(1);
    };

    const removerDoCarrinho = (id) => {
        setCarrinho(carrinho.filter(i => i.id !== id));
    };

    const finalizarVenda = () => {
        if (!clienteSelecionado) return alert('Selecione um cliente');
        if (carrinho.length === 0) return alert('Adicione itens ao carrinho');
        const total = carrinho.reduce((s, i) => s + i.subtotal, 0);
        const novaVenda = { id: vendas.length + 1, data: new Date().toLocaleDateString(), cliente: clienteSelecionado, total, itens: [...carrinho] };
        setVendas([...vendas, novaVenda]);
        setCarrinho([]);
        setClienteSelecionado('');
        alert('✅ Venda finalizada com sucesso!');
    };

    const totalCarrinho = carrinho.reduce((s, i) => s + i.subtotal, 0);

    return (
        <div>
            <h2>💰 Registro de Vendas</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                {/* Carrinho */}
                <div>
                    <h3>🛒 Carrinho de Compras</h3>
                    <select value={clienteSelecionado} onChange={e => setClienteSelecionado(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }}>
                        <option value="">Selecione um cliente</option>
                        {clientes.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <select value={produtoSelecionado?.id} onChange={e => setProdutoSelecionado(produtos.find(p => p.id === parseInt(e.target.value)))} style={{ flex: 2, padding: '8px' }}>
                            {produtos.map(p => <option key={p.id} value={p.id}>{p.nome} - R$ {p.preco.toFixed(2)}</option>)}
                        </select>
                        <input type="number" value={quantidade} onChange={e => setQuantidade(parseInt(e.target.value))} min="1" style={{ width: '80px', padding: '8px' }} />
                        <button onClick={adicionarAoCarrinho} style={{ background: '#667eea', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>➕</button>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr style={{ background: '#f8f9fa' }}><th>Produto</th><th>Qtd</th><th>Subtotal</th><th></th></tr></thead>
                        <tbody>
                            {carrinho.map(item => (
                                <tr key={item.id}><td>{item.nome}</td><td>{item.quantidade}</td><td>R$ {item.subtotal.toFixed(2)}</td><td><button onClick={() => removerDoCarrinho(item.id)} style={{ background: '#e53e3e', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>❌</button></td></tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ marginTop: '10px', padding: '10px', background: '#e8f4f8', borderRadius: '5px', textAlign: 'right', fontWeight: 'bold' }}>💰 Total: R$ {totalCarrinho.toFixed(2)}</div>
                    <button onClick={finalizarVenda} style={{ marginTop: '10px', background: '#38a169', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>✅ Finalizar Venda</button>
                </div>

                {/* Histórico */}
                <div>
                    <h3>📋 Histórico de Vendas</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr style={{ background: '#667eea', color: 'white' }}><th style={{ padding: '10px' }}>Data</th><th>Cliente</th><th>Total</th></tr></thead>
                        <tbody>
                            {vendas.map(v => (
                                <tr key={v.id} style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '8px' }}>{v.data}</td><td>{v.cliente}</td><td>R$ {v.total.toFixed(2)}</td></tr>
                            ))}
                            {vendas.length === 0 && <tr><td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>Nenhuma venda realizada ainda</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Vendas;
