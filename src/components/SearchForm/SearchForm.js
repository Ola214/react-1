import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/searchRedux';

const SearchForm = () => {
  const searchString = useSelector(state => state.searchString);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateSearchString(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // nic nie musimy robić — stan już jest w Reduxie
  };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..."
                value={searchString}
                onChange={handleChange}
            />
            <TextInput placeholder="Add new column" />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;