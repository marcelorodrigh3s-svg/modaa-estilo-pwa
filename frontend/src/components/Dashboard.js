import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [stats, setStats] = useState({
        totalProdutos: 0,
        totalClientes: 0,
        faturamentoMes: 0,
        maisVendido: '-'
    });

    // Dados simulados (depois vai conectar com a API)
    useEffect(() => {
        setStats({
            totalProdutos: 72,
            totalClientes: 18,
            faturamentoMes: 3247.50,
            maisVendido: 'Camiseta Básica'
        });
    }, []);

    return (
        <div>
            <h2>📊 Dashboard - Resumo da Loja</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>📦 Produtos em Estoque</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>{stats.totalProdutos}</p>
                </div>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>👥 Clientes Cadastrados</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>{stats.totalClientes}</p>
                </div>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>💰 Faturamento do Mês</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>R$ {stats.faturamentoMes.toFixed(2)}</p>
                </div>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>🏆 Produto + Vendido</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#667eea' }}>{stats.maisVendido}</p>
                </div>
            </div>
            <div style={{ marginTop: '30px', background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h3>📌 Sobre o PWA</h3>
                <p>Este é um Progressive Web App (PWA) que pode ser instalado no seu celular!</p>
                <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                    <li>✅ Funciona offline (modo leitura)</li>
                    <li>✅ Pode ser instalado na tela inicial</li>
                    <li>✅ Atualizações automáticas</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
