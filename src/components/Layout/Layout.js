import css from './Layout.module.css';

const Layout = ({ title, urlBg = false, colorBg = false, children }) => {
  const layoutStyle = {
    backgroundImage: urlBg ? `url(${urlBg}` : null,
    backgroundColor: colorBg,
  };

  return (
    <section style={layoutStyle} className={css.root}>
      <div className={css.wrapper}>
        <article>
          <div className={css.title}>
            {title && <h3>{title}</h3>}
            <span className={css.separator} />
          </div>
          <div className={`${css.desc} ${css.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
