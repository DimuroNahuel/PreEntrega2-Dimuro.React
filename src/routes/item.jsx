import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot() {
  const { id } = useParams();

  return (
    <div>
      <ItemDetailContainer />

    </div>
  );
}

export default ItemRoot;
