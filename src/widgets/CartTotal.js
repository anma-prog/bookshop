function CartTotal({ total, delivery, books }) {
  return (
    <div className="sum-container">
      <div className="order-summary">
        <div className="piece">
          <p>Сумма заказа</p>
          <p id="total-sum">{books} ₽</p>
        </div>
        <div className="piece">
          <p>Доставка</p>
          <p id="delivery-sum">{delivery} ₽</p>
        </div>
        <div className="piece">
          <p>Итого</p>
          <p id="total-wd">{total} ₽</p>
        </div>
        <button>Продолжить</button>
      </div>
    </div>
  );
}

export default CartTotal;
