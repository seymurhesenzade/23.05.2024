import "../Header/index.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="container">
        <header id="header">
          <div className="coloshop">
            <h1>COLO</h1>
            <h1 className="shop">SHOP</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" style={{ color: "black" }}>Home</Link>
              </li>
              <li>
                <Link style={{ color: "black" }}>Shop</Link>
              </li>
              <li>
                <Link style={{ color: "black" }}>Promotion</Link>
              </li>
              <li>
                <Link to="/add-product" style={{ color: "black" }}>Add Page</Link>
              </li>
              <li>
                <Link style={{ color: "black" }}>Blog</Link>
              </li>
              <li>
                <Link style={{ color: "black" }}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="social">
          <FaSearch />
          <FaUser style={{marginLeft:"10px"}} />
          <FaShoppingCart style={{marginLeft:"10px"}} />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
