import React, { Component } from "react";
import Product from "./product";
import Title from "./title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
