import useFetch from "../hooks/useFetch";
import "./Catalog.scss";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Catalog = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/catalog");

  return (
    <section className="catalog">
      <ErrorBoundary fallback="Не удалось загрузить содержимое">
        {products &&
          products.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="catalog__item-link"
            >
              <div className="catalog__item">
                <img
                  className="catalog__item-img"
                  src={item.mainImage}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="catalog__item-prices">
                  {item.discountedPrice ? (
                    <>
                      <div className="catalog__item-price">
                        {item.discountedPrice} ₽
                      </div>
                      <div className="catalog__item-price catalog__item-price--old">
                        {item.price} ₽
                      </div>
                    </>
                  ) : (
                    <div className="catalog__item-price">{item.price} ₽</div>
                  )}
                </div>
                <div className="catalog__item-name">{item.name}</div>
              </div>
            </Link>
          ))}
        {isLoading && <div>Загрузка...</div>}
        {error && <div>Ошибка загрузки данных {error}</div>}
      </ErrorBoundary>
    </section>
  );
};

export default Catalog;
