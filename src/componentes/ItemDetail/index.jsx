import React, { useContext, useState } from "react";
import './itemDetail.css'
import  ItemCount  from "../ItemCount";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function ItemDetail({product}) {
  const {onAdd}=useContext(Context)
  const [added, setAdded] = useState(0);

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
        <p className="price">Precio unitario $ {product.price}</p>
        <p className="stock">Unidades disponibles {product.stock}</p>

        <div className="fotterDesc">

        <div>
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button  variant="primary">Terminar compra</Button>
                </Link>
              )}
            </div>
          </div>

        </div>
      
      </div>
    </div>
  );
}

export default ItemDetail;