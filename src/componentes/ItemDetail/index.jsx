import React, { useState } from "react";

function ItemDetail(product) {

  const [quantity, setQuantity] = useState(1);

  return (

    <div className="content">
      <div className="image">
        <img src={product.imagen} />
      </div>
      <div className="description">
        <h3 className="title">{product.title} </h3>
        <p>{product.description}</p>
        <p className="price">$ {product.precio}</p>
        <div className="fotterDesc">
          <button
            className="normalButton"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <p className="quantity">{quantity}</p>
          <button
            className="normalButton"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="compra">
          <button className="normalButton">Comprar</button>
          <button className="normalButton">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;