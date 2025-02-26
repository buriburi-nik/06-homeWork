
import { useCartContext } from './CartContext';

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increase, decrease } = useCartContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          ▲
        </button>
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          ▼
        </button>
      </div>
    </article>
  );
};

export default CartItem;
