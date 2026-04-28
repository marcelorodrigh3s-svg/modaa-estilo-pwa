import React, { useState } from 'react';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    
    const Dashboard = () => (
        <div>
            <h2>📊 Dashboard - Moda & Estilo</h2>
            <p>Bem-vindo ao sistema PWA! 🎉</p>
            <div style={{background:'#e8f4f8', padding:20, borderRadius:10}}>
                <h3>✨ Progressive Web App (PWA)</h3>
                <ul>
                    <li>✅ Pode ser instalado no celular</li>
                    <li>✅ Funciona offline (modo leitura)</li>
                    <li>✅ Atualizações automáticas</li>
                </ul>
            </div>
        </div>
    );
    
    return (
        <div className="app">
            <header className="header">
                <h1>👗 Moda & Estilo</h1>
                <p>Sistema de Gestão - PWA</p>
            </header>
            <main><Dashboard /></main>
        </div>
    );
}

export default App;
