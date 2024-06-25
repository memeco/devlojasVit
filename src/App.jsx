import './App.css'
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  const produtos = [
    { id: 1, nome: 'Notebook Asus', imageURL: 'https://cdn.awsli.com.br/954/954868/produto/68626025/5d150286dc.jpg', price: 3000 },
    { id: 2, nome: 'Amazon Fire', imageURL:'https://images.kabum.com.br/produtos/fotos/sync_mirakl/527234/Tablet-Amazon-Fire-Max-11-64GB-4GB-RAM-Com-Alexa-Preto_1712768298_g.jpg', price: 1500 },
    { id: 1, nome: 'Notebook Asus', imageURL: 'https://cdn.awsli.com.br/954/954868/produto/68626025/5d150286dc.jpg', price: 3000 },
    { id: 2, nome: 'Amazon Fire', imageURL:'https://images.kabum.com.br/produtos/fotos/sync_mirakl/527234/Tablet-Amazon-Fire-Max-11-64GB-4GB-RAM-Com-Alexa-Preto_1712768298_g.jpg', price: 1500 }
  ];

  return (
    <>
      <Header/>
      <div className='produtos'>
        {produtos.map(produto => (
        <div className='card' key={produto.id}>
          <img className='foto' src={produto.imageURL}/>
          <h6>{produto.nome}</h6>
          <p>{produto.price}</p>
          <p>Preço Agora: {produto.price - (produto.price * 0.3)}</p>
          <button className='comprar'>Comprar Agora!</button>
        </div>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default App
