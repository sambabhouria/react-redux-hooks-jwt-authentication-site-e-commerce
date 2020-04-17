import React, { Component } from "react";
import Product from "./product";
import Title from "./title";
import { storeProducts } from "../data";
import styled from "styled-components";
import Pagination from "../pagination/pagination";
import { ProductConsumer } from "../context/context";

export default class ProductList extends Component {
  state = {
    products: [],
    currentProducts: [],
    currentPage: null,
    totalPages: null,
  };

  componentDidMount() {
    const products = storeProducts;

    this.setState({ products });
  }

  onPageChanged = (data) => {
    const { products } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  };

  render() {
    const { products, currentProducts, currentPage, totalPages } = this.state;

    const totalProducts = products.length;
    if (totalProducts === 0) {
      return null;
    }
    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : "",
    ]
      .join(" ")
      .trim();

    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="SUPER" title="SAMBA" />
            <div className="row">
              <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <h2 className={headerClass}>
                    <strong className="text-secondary">{totalProducts}</strong>{" "}
                    Products
                  </h2>
                  {currentPage && (
                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                      Page{" "}
                      <span className="font-weight-bold">{currentPage}</span> /{" "}
                      <span className="font-weight-bold">{totalPages}</span>
                    </span>
                  )}
                </div>
                <div className="d-flex flex-row py-4 align-items-center">
                  <Pagination
                    totalRecords={totalProducts}
                    pageLimit={8}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                  />
                </div>
              </div>

              <ProductConsumer>
                {() => {
                  return currentProducts.map((product) => {
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
