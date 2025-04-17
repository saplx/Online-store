import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/" className="menu__link">
                  Главная
                </a>
              </li>
              <li className="menu__item">
                <a href="/categories" className="menu__link">
                  Категории
                </a>
              </li>
              <li className="menu__item">
                <a href="/contacts" className="menu__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__logo">
            <a href="/" className="header__logo-link">
              Mixat
            </a>
          </div>

          <div className="header__actions">
            <form className="header__search-form" action="/search" method="GET">
              <input
                type="text"
                name="q"
                className="header__search-input"
                placeholder="Поиск..."
              />
              <button type="submit" className="header__search-button">
                🔍
              </button>
            </form>

            <a
              href="/favorites"
              className="header__icon header__icon--favorite"
            >
              <img
                src="/icons/favorite.svg"
                alt="Избранное"
                className="header__icon-image"
              />
              <span className="header__icon-count">3</span>
            </a>

            <a href="/cart" className="header__icon header__icon--cart">
              <img
                src="/icons/cart.svg"
                alt="Корзина"
                className="header__icon-image"
              />
              <span className="header__icon-count">5</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
