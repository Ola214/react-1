import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';


const Column = props => {
    const searchString = useSelector(state => state.searchString);
    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.icon + ' fa fa-' + props.icon} />
             <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} id={card.id}/>)}
            </ul>
            <CardForm cards={cards} id={props.id}/>
            {/* <CardForm id={props.id}/> */}
        </article>
    );
};

export default Column;