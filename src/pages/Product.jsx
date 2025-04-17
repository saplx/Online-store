import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../components/redux/cartSlice";

import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/catalog/${id}`);

  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, selectedSize]);

  const handleAddToCart = () => {
    dispatch(addProductToCart(...product, selectedSize));
  };

  return (
    <>
      <section className="product">
        {isLoading && <p className="product__loading">Загрузка...</p>}
        {error && <div className="product__error">Ошибка: {error.message}</div>}
        {product && (
          <div className="product__content">
            <div className="product__slider">
              <ImageSlider images={product?.variants?.[0]?.images || []} />
            </div>
            <div className="product__info">
              <h1 className="product__name">{product.name}</h1>
              <p className="product__description">{product.description}</p>
              <div className="product__sizes">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`product__sizes-button ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="product__purchase">
              {product.discountedPrice ? (
                <>
                  <div className="product__price">
                    <span className="product__price--current">
                      {product.discountedPrice} ₽
                    </span>
                    <span className="product__price--old">
                      {product.price} ₽
                    </span>
                  </div>
                </>
              ) : (
                <div className="product__price">
                  <span className="product__price--current">
                    {product.price} ₽
                  </span>
                </div>
              )}
              <div className="product__actions">
                <button
                  onClick={handleAddToCart}
                  className="product__button--cart"
                  type="button"
                >
                  Добавить в корзину
                </button>
                <button className="product__button--favorite" type="button">
                  Добавить избранное
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Product;
