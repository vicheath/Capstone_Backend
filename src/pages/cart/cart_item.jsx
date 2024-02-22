
import { useContext, useState, useEffect } from "react";
import { ShopContext } from '../../context/shop_context';
import PropTypes from "prop-types";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [count, setCount] = useState(cartItems[id]);

  useEffect(() => {
    setCount(cartItems[id]);
  }, [cartItems]);

  const handleRemove = () => {
    removeFromCart(id);
  };

  const handleAdd = () => {
    addToCart(id);
  };

  const handleUpdate = (e) => {
    updateCartItemCount(Number(e.target.value), id);
  };

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={handleRemove}> - </button>
          <input value={count} onChange={handleUpdate} />
          <button onClick={handleAdd}> + </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};