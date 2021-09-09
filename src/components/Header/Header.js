import css from './Header.module.css';

const Header = ({ title, descr }) => (
  <header>
    <div class={css.forest}></div>
    <div class={css.container}>
      <h1>{title}</h1>
      <p>{descr}</p>
    </div>
  </header>
);

export default Header;
