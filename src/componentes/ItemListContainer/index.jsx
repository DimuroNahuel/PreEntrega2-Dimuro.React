import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer({ catId, esRuta }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );

    productsPromise
      .then((response) => {
        if (esRuta) {
          const productsFiltered = response.filter(
            (product) => product.category === catId
          );
          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [catId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;