import css from './PokemonCard.module.css';

const PokemonCard = ({ children, ...props }) => {
  console.log('props :>> ', props);
  return <div className="root">{children}</div>;
};

export default PokemonCard;
