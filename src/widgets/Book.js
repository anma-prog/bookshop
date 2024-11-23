import { useCart } from "../logic/CartProvider";

function Book({ data }) {
  const { cart, dispatch } = useCart();
  const bookCount = cart[data.id] !== undefined ? cart[data.id].count : 0;

  const removeBook = () => {
    dispatch({ type: 'REMOVE_BOOK', payload: data });
  };
  const addBook = () => {
    dispatch({ type: 'ADD_BOOK', payload: data });
  };

  return (
    <article id={data.id}>
      <img src={data.image} alt={'Обложка ' + data.title}/>
      <div className="info">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p className="price">{data.price} ₽</p>
      </div>
      {
        (bookCount <= 0) ? (
          <button onClick={addBook}>В корзину</button>
        ) : (
          <div className="counter">
            <button onClick={removeBook}>-</button>
            <p>{bookCount} шт.</p>
            <button onClick={addBook}>+</button>
          </div>
        )
      }
    </article>
  );
}

export default Book;
