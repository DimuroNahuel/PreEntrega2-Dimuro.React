import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";



function ItemDetailContainer(){
  const [product,setProduct]=useState(null)

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", "2LyrVs3VGYw21cS6xXee");

    getDoc(itemRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({id:snapshot.id, ...snapshot.data()})
        }
      })
      .catch((error) => console.log({ error }));
  }, []);
  if (!product){
    return <p>Loading...</p>
  }

  return (
    <div>
      <ItemDetail product={product}
      // oneProduct 
      />
    </div>
  );
}
export default ItemDetailContainer;