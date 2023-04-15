import { useContext } from 'react';
import './cardWidget.css';
import { Context } from '../../context/index.jsx';



function CardWidget(){
    const {productsAdded} = useContext(Context)
    return (
        <button className="cardWidget">
        <img src="https://t3.ftcdn.net/jpg/00/73/10/64/240_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg" className="img-thumbnail" alt="..."/>
        {productsAdded.length}
        </button>
        );
}

export default CardWidget;