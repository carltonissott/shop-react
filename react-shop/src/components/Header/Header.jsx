// import '../../index.css'
import logo from "../UX/tropicalnook.png";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "animate.css";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);
  const [isInital, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInital) {
      setIsInitial(false);
      return;
    }
    if (cart.changed) {
      setIsAdded(true);
      const time = setTimeout(() => {
        setIsAdded(false);
      }, 1000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [isInital, cart]);

  return (
    <div className="header-main">
      <Link to="/">
        <img alt="tropicalnooklogo" src={logo} />
      </Link>
      <ul className="flex">
        <li className="header-li">
          <NavLink className="navlink" to="/shopnow">
            Shop Now
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink className="navlink" to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li className="header-li">
          <NavLink className="navlink" to="/faq">
            FAQ
          </NavLink>
        </li>
      </ul>
      <Link to="/checkout">
        <img
          className={isAdded ? "animate__animated animate__bounce" : ""}
          alt="shoppingcart"
          id="shopicon"
          src="https://img.icons8.com/ios-glyphs/90/3d4034/shopping-cart--v1.png"
        />
      </Link>
    </div>
  );
};

export default Header;
