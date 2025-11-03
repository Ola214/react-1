import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeCard(card.id));
  };

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(card.id));
  };

  return (
    <div className="card">
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <button onClick={handleToggleFavorite}>
        <i className={`fa ${card.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i>
      </button>
      <button onClick={handleDelete}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};


export default Card;