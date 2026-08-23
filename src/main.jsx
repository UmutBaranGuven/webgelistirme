import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap 5 CSS kütüphanesi içe aktarımı
import 'bootstrap/dist/css/bootstrap.min.css';
// Uygulama özel CSS stilleri
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
