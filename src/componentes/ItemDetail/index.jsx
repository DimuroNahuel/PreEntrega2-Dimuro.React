import React, { useContext, useState } from "react";
import './itemDetail.css'
import  ItemCount  from "../ItemCount";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function ItemDetail({product}) {
  const {onAdd}=useContext(Context)
  const [added, setAdded] = useState(1);

  function onAddProduct(count){
    setAdded(count)
    onAdd(product, count)
  }
  return (

    <div className="content">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="description">
        <h3 className="title">{product.title} </h3>
        <p>{product.description}</p>
        <p className="price">$ {product.price}</p>
        <div className="fotterDesc">

        <div>
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button>Terminar compra</Button>
                </Link>
              )}
            </div>
          </div>

          {/* <button
            className="normalButton"
            onClick={() => setAdded(added - 1)}
          >
            -
          </button>
          <p className="added">{added}</p>
          <button
            className="normalButton"
            onClick={() => setAdded(added + 1)}
          >
            +
          </button> */}
        </div>
        <div className="compra">
          <button className="normalButton">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;