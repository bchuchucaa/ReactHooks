import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp/CounterApp';
import '../src/styles.css';
import { FirstApp } from './FirstApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CounterApp />
    </React.StrictMode>
);