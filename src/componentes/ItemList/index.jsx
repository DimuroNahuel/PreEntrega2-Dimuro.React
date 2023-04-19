import Item from "../Item";
import "./itemList.css"
import Button from 'react-bootstrap/Button';


function ItemList({ products }) {
  return (
    <div className="products-container">
      <ul className="products-list row content">
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;