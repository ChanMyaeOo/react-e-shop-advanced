import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import "./shop-icon.styles.scss";

const ShopIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopIcon);
