import useFetch from "./useFetch";
import "./Catalog.scss";
import { Link } from "react-router";

const Catalog = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/catalog");

  return (
    <section className="catalog">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDOLFmcL71ZNRHtjZXINatMCEXbLDEvfGLA&s"
                alt={item.name}
              />
              <div className="catalog__item-prices">
                {item.discountedPrice ? (
                  <>
                    <div className="catalog__item-price">{item.price} ₽</div>
                    <div className="catalog__item-price--old">
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
      {isLoading && "Загрузка"}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Catalog;
