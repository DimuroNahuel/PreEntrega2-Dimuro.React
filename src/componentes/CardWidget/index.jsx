import { useContext } from 'react';
import './cardWidget.css';
import { Context } from '../../context/index.jsx';
import { Link } from "react-router-dom";




function CardWidget() {
  const { getQuantity } = useContext(Context)
  return (
    <button className="cardWidget">
    <Link to="/cart">
      <img src="https://firebasestorage.googleapis.com/v0/b/fir-1-coderreactjs.appspot.com/o/353439-basket-buy-cart-ecommerce-online-purse-shop-shopping_107515.ico?alt=media&token=446b4528-83c7-49aa-a7fb-a5c8ac6c9fb0" alt="..."/>
      </Link>
      {getQuantity() > 0 ? <i className="CartCant">{getQuantity()}</i> : null}
    </button>
  );
}

export default CardWidget;