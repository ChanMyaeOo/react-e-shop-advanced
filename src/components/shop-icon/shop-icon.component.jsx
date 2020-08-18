import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./shop-icon.styles.scss";

const ShopIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default ShopIcon;