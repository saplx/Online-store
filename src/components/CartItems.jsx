import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <strong>{item.product.name}</strong> – Количество: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItems;
