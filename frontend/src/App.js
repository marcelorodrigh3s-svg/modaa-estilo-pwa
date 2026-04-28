import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Produtos from './components/Produtos';
import Clientes from './components/Clientes';
import Vendas from './components/Vendas';
import Relatorios from './components/Relatorios';

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <Dashboard />;
            case 'produtos': return <Produtos />;
            case 'clientes': return <Clientes />;
            case 'vendas': return <Vendas />;
            case 'relatorios': return <Relatorios />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="app">
            <header className="header">
                <h1>👗 Moda & Estilo</h1>
                <p>Sistema de Gestão - PWA</p>
                <div className="nav-buttons" style={{marginTop:15}}>
                    <button onClick={() => setActiveTab('dashboard')}>📊 Dashboard</button>
                    <button onClick={() => setActiveTab('produtos')}>👕 Produtos</button>
                    <button onClick={() => setActiveTab('clientes')}>👥 Clientes</button>
                    <button onClick={() => setActiveTab('vendas')}>💰 Vendas</button>
                    <button onClick={() => setActiveTab('relatorios')}>📈 Relatórios</button>
                </div>
            </header>
            <main>{renderContent()}</main>
        </div>
    );
}

export default App;
