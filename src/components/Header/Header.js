import css from './Header.module.css';

const Header = ({ title, descr }) => (
  <header className={css.root}>
    <div className={css.forest}></div>
    <div className={css.container}>
      {title && <h1>{title}</h1>}
      {descr && <p>{descr}</p>}
    </div>
  </header>
);

export default Header;
