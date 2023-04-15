import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot() {
  const { id } = useParams();

  return (
    <div>
      <ItemDetailContainer />
      {/* productDetail={id} */}
    </div>
  );
}

export default ItemRoot;
