import React, { useState } from 'react';

function Clientes() {
    const [clientes, setClientes] = useState([
        { id: 1, nome: 'Ana Silva', telefone: '(11) 99999-1111', email: 'ana@email.com' },
        { id: 2, nome: 'Carlos Souza', telefone: '(11) 99999-2222', email: 'carlos@email.com' },
        { id: 3, nome: 'Mariana Lima', telefone: '(11) 99999-3333', email: 'mariana@email.com' },
    ]);

    const [novoCliente, setNovoCliente] = useState({ nome: '', telefone: '', email: '' });
    const [busca, setBusca] = useState('');

    const adicionarCliente = () => {
        if (!novoCliente.nome) return alert('Preencha o nome');
        setClientes([...clientes, { ...novoCliente, id: clientes.length + 1 }]);
        setNovoCliente({ nome: '', telefone: '', email: '' });
    };

    const clientesFiltrados = clientes.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div>
            <h2>👥 Gerenciamento de Clientes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                    <h3>➕ Novo Cliente</h3>
                    <input type="text" placeholder="Nome" value={novoCliente.nome} onChange={e => setNovoCliente({ ...novoCliente, nome: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="text" placeholder="Telefone" value={novoCliente.telefone} onChange={e => setNovoCliente({ ...novoCliente, telefone: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="email" placeholder="E-mail" value={novoCliente.email} onChange={e => setNovoCliente({ ...novoCliente, email: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <button onClick={adicionarCliente} style={{ background: '#667eea', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>➕ Adicionar</button>
                </div>
                <div>
                    <input type="text" placeholder="🔍 Buscar cliente..." value={busca} onChange={e => setBusca(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr style={{ background: '#667eea', color: 'white' }}><th style={{ padding: '10px' }}>Nome</th><th>Telefone</th><th>E-mail</th></tr></thead>
                        <tbody>
                            {clientesFiltrados.map(c => (
                                <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '8px' }}>{c.nome}</td><td>{c.telefone}</td><td>{c.email}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
