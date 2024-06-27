import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [ produtos, setProdutos ] = useState([]);
  const [ cart, setCart ] = useState([]);


  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q=notebook');
        setProdutos(response.data.results);
      } catch(error) {
        console.error('Erro ao buscar os produtos da API', error);
      }
    };

    fetchProdutos();
  }, []); 

  const addCart = (produto) => {
    setCart([...cart, produto]);
  };

  return (
    <>
      <div className='produtos'>
        {produtos.map(produto => (
        <div className='card' key={produto.id}>
          <img className='foto' src={produto.thumbnail}/>
          <h6>{produto.nome}</h6>
          <p>{produto.price}</p>
          <p>Preço Agora: {produto.price - (produto.price * 0.3)}</p>
          <button className='comprar' onClick={() => addCart(produto)}>Comprar Agora!</button>
        </div>
        ))}
      </div>
      <div className='cart'>
        <h2>Carrinho de compras</h2>
         {cart.map ((item, index) => (
          <div key={index} className='cart-item'>
            <h5>{item.nome}</h5>
            <p>Preço R$: {item.price}</p>
          </div>
         ))}
      </div>
    </>
  )
}

export default App
