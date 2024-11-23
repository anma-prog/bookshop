import { useCart } from "../logic/CartProvider";

import { Link } from "react-router-dom";

function CartOverlay() {
  const { cart } = useCart();
  const visible = Object.keys(cart).length > 0;

  return (
    <div className="overlay">
      <div className={ visible ? 'cart active' : 'cart' }>
        <Link to="/cart">
          <img src="img/cart_b.png" alt="Корзина" width="32" height="32" />
        </Link>
      </div>
    </div>
  );
}

export default CartOverlay;
