import css from './Layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
  const inlineStyle = urlBg
    ? {
        background: `url(${urlBg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
    : { backgroundColor: colorBg };

  return (
    <section className={css.root} style={inlineStyle}>
      <div className={css.wrapper}>
        <article>
          <div className={css.title}>
            <h3>{title}</h3>
            <span className={css.separator}></span>
          </div>
          <div className={`${css.desc} ${css.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
