import css from './Footer.module.css';

const Footer = ({ title, descr }) => {
  return (
    <footer>
      <div className={css.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
