import css from './Header.module.css';

const Header = ({ title, descr }) => (
  <header>
    <div className={css.forest}></div>
    <div className={css.container}>
      <h1>{title}</h1>
      <p>{descr}</p>
    </div>
  </header>
);

export default Header;
