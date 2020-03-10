import React, { Component } from "react";
import Title from "../product/title";
import CartColumns from "./cart-columns";
import CartList from "./cart-list";
import CartTotals from "./cart-totals";
import { ProductConsumer } from "../context/context";
import EmptyCart from "./cmpty-cart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
