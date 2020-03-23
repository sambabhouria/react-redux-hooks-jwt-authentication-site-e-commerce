import React, { Component, Fragment } from "react";
import Title from "../product/title";
import CartColumns from "./cart-columns";
import CartList from "./cart-list";
import CartTotals from "./cart-totals";
import { ProductConsumer } from "../context/context";
import EmptyCart from "./empty-cart";
export default class Store extends Component {
  render() {
    return (
      <section style={{ marginTop: "30px" }}>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </Fragment>
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
