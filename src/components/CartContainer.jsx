import CartItem from './CartItem';
import { useCartContext } from './CartContext';

const CartContainer = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
