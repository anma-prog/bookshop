import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCart } from "../logic/CartProvider";

import CartTotal from "../widgets/CartTotal";
import BookSection from "../widgets/BookSection";
import NavigationBar from "../widgets/NavigationBar";

function CartPage() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const books = Object.values(cart);

  useEffect(() => {
    if (books.length < 1) {
      navigate('/');
    }
  });

  let booksSum = 0;

  for (let bookId in cart) {
    const book = cart[bookId];
    booksSum += book.count * book.price;
  }

  const deliverySum = booksSum > 0 ? 200 : 0;
  const totalSum = booksSum + deliverySum;

  return (
    <main className="App">
      <NavigationBar sections={[ { id: '#cart', label: 'Корзина' } ]} />
      <BookSection id="#cart" title="">
        {books}
      </BookSection>
      <CartTotal
        books={booksSum}
        total={totalSum}
        delivery={deliverySum}
      />
    </main>
  );
}

export default CartPage;
