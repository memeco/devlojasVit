import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
)
