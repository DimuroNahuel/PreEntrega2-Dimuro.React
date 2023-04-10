import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import ItemList from "../ItemList";

function ItemListContainer({ category, categoryExists }) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const db=getFirestore()
    const itemsCollection=collection(db,'items')

    getDocs(itemsCollection)
    .then ((snapshot)=>{
      const docs =snapshot.docs;
      console.log({docs})

     }).catch((error)=>console.log({error}))
  },[])

  // useEffect(() => {
  //   const productsPromise = new Promise((resolve, reject) =>
  //     setTimeout(() => resolve(Products), 2000)
  //   );
  //   productsPromise
  //     .then((response) => {
  //       if (categoryExists) {
  //         const productsFiltered = response.filter(
  //           (product) => product.category === category
  //         );
  //         setProducts(productsFiltered);
  //       } else {
  //         setProducts(response);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;