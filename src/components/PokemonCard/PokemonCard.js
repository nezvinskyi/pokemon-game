import { useState } from 'react';
import cardBck from '../../assets/images/card-back-side.jpg';

import css from './PokemonCard.module.css';

const PokemonCard = ({ name, id, type, values, img }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <div className={css.root} onClick={handleClick}>
      <div className={`${css.pokemonCard} ${isActive ? css.active : ''}`}>
        <div className={css.cardFront}>
          <div className={`${css.wrap} ${css.front}`}>
            <div className={`${css.pokemon} ${type}`}>
              <div className={css.values}>
                <div className={`${css.count} ${css.top}`}>{values.top}</div>
                <div className={`${css.count} ${css.right}`}>{values.right}</div>
                <div className={`${css.count} ${css.bottom}`}>{values.bottom}</div>
                <div className={`${css.count} ${css.left}`}>{values.left}</div>
              </div>
              <div className={css.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={css.info}>
                <span className={css.number}>#{id}</span>
                <h3 className={css.name}>{name}</h3>
                <small className={type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={css.cardBack}>
          <div className={`${css.wrap} ${css.back}`}>
            <img src={cardBck} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
