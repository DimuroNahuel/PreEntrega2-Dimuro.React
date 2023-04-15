import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList";

function ItemListContainer({ category, categoryExists }) {
  const [products, setProducts] = useState([]);

  const dataFirebase= async(collection)=>{
    await getDocs(collection)
    .then((snapshot) => {
      const docs = snapshot.docs;
      setProducts(
        docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
      )
    }).catch((error) => console.log({ error }))
  }

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'Items')

    if (categoryExists) {
      const queryResult = query(itemsCollection, where('category', '==', category))
      dataFirebase(queryResult)
    } 
    else {
      dataFirebase(itemsCollection)
    }
  }, [category])

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