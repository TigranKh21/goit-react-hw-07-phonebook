import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contactsReducer';

import css from './Contact.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterData = useSelector(store => store.filterData);

  const handleFindChange = e => {
    const value = e.target.value;
    const action = filterContact(value);
    dispatch(action);
  };

  return (
    <div className={css.contactForm}>
      <label className={css.contactNameLabel}>Find contact by name</label>
      <input
        className={css.inputField}
        type="text"
        placeholder="search..."
        name="filter"
        value={filterData}
        onChange={handleFindChange}
      />
    </div>
  );
};
