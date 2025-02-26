import { useCartContext } from './CartContext';
import './Navbar.css'; 

const Navbar = () => {
  const { totalAmount } = useCartContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h3>UseReducer</h3>
        <div className="nav-container">
          <p>Your Cart</p>
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
