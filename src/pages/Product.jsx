import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/catalog/${id}`);

  console.log(product, isLoading, error);

  return (
    <>
      <Header />
      <section className="product">
        {isLoading && <p className="product__loading">Загрузка...</p>}
        {error && <div className="product__error">Ошибка: {error.message}</div>}
        {product && (
          <div className="product__content">
            <div className="product__slider">
              <ImageSlider images={product.variants[0].images} />
            </div>
            <div className="product__info">
              <h1 className="product__name">{product.name}</h1>
              <p className="product__description">{product.description}</p>
              <select className="product__colors" name="colors" id="colors">
                {product.colors.map((color, index) => (
                  <option key={index} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>
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
                  <div className="product__actions">
                    <button
                      className="product__button product__button--cart"
                      type="button"
                    >
                      Добавить в корзину
                    </button>
                    <button
                      className="product__button product__button--favorite"
                      type="button"
                    >
                      Добавить избранное
                    </button>
                  </div>
                </>
              ) : (
                <div className="product__price">
                  <span className="product__price--current">
                    {product.price} ₽
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Product;
