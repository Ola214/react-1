import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <span>{title}</span>

      <button
        onClick={() => dispatch(toggleCardFavorite(id))}
        className={clsx(styles.favoriteButton, isFavorite && styles.active)}
      >
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;