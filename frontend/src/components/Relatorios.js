import React, { useState } from 'react';

function Relatorios() {
    // Dados simulados de vendas
    const [relatorio] = useState({
        faturamentoTotal: 3247.50,
        totalItensVendidos: 147,
        produtoMaisVendido: { nome: 'Camiseta Básica', quantidade: 87, valor: 4341.30 },
        topClientes: [
            { nome: 'Ana Silva', total: 847.00 },
            { nome: 'Carlos Souza', total: 545.00 },
            { nome: 'Mariana Lima', total: 412.00 },
        ],
        produtosTop: [
            { nome: 'Camiseta Básica', quantidade: 87, valor: 4341.30 },
            { nome: 'Calça Jeans', quantidade: 42, valor: 5455.80 },
            { nome: 'Vestido Floral', quantidade: 38, valor: 3416.20 },
            { nome: 'Blusa de Seda', quantidade: 25, valor: 1997.50 },
        ]
    });

    const gerarPDF = () => {
        alert('📄 Relatório PDF gerado! (Funcionalidade em desenvolvimento)');
    };

    const exportarExcel = () => {
        alert('📊 Relatório Excel gerado! (Funcionalidade em desenvolvimento)');
    };

    const imprimir = () => {
        window.print();
    };

    return (
        <div>
            <h2>📈 Relatórios Gerenciais</h2>

            {/* Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px' }}>
                    <h3>🏆 Produto Mais Vendido</h3>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>{relatorio.produtoMaisVendido.nome}</p>
                    <p>{relatorio.produtoMaisVendido.quantidade} unidades</p>
                    <p>R$ {relatorio.produtoMaisVendido.valor.toFixed(2)}</p>
                </div>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px' }}>
                    <h3>💰 Faturamento Total</h3>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#667eea' }}>R$ {relatorio.faturamentoTotal.toFixed(2)}</p>
                    <p>+23% em relação ao mês anterior</p>
                </div>
                <div className="stat-card" style={{ background: '#e8f4f8', padding: '20px', borderRadius: '10px' }}>
                    <h3>📦 Itens Vendidos</h3>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#667eea' }}>{relatorio.totalItensVendidos} un</p>
                </div>
            </div>

            {/* Cliente Destaque */}
            <div style={{ marginTop: '20px', background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <h3>👑 Cliente Destaque</h3>
                <p style={{ fontSize: '18px' }}>{relatorio.topClientes[0]?.nome} - R$ {relatorio.topClientes[0]?.total.toFixed(2)} em compras</p>
            </div>

            {/* Tabela Top Produtos */}
            <div style={{ marginTop: '20px' }}>
                <h3>📊 TOP 5 PRODUTOS MAIS VENDIDOS</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ background: '#667eea', color: 'white' }}>
                            <th style={{ padding: '12px' }}>Produto</th>
                            <th>Quantidade Vendida</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {relatorio.produtosTop.map((p, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px' }}>{index + 1}. {p.nome}</td>
                                <td>{p.quantidade} un</td>
                                <td>R$ {p.valor.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Botões de ação */}
            <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={gerarPDF} style={{ background: '#e53e3e', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📥 Exportar PDF</button>
                <button onClick={exportarExcel} style={{ background: '#38a169', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📊 Exportar Excel</button>
                <button onClick={imprimir} style={{ background: '#667eea', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>🖨️ Imprimir</button>
            </div>
        </div>
    );
}

export default Relatorios;
