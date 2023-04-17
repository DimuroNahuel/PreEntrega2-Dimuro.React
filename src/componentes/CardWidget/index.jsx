import { useContext } from 'react';
import './cardWidget.css';
import { Context } from '../../context/index.jsx';
import { Link } from "react-router-dom";




function CardWidget() {
  const { getQuantity } = useContext(Context)
  return (
    <button className="cardWidget">
    <Link to="/cart">
      <img src="https://t3.ftcdn.net/jpg/00/73/10/64/240_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg" className="img-thumbnail" alt="..."/>
      </Link>
      {getQuantity() > 0 ? <i className="CartCant">{getQuantity()}</i> : null}
    </button>
  );
}

export default CardWidget;