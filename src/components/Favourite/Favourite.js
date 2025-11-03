import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { Navigate } from 'react-router-dom';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) return <Navigate to="/" />;

  return (
    <div className={styles.favorite}>
      <h2>Favorite Cards</h2>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;