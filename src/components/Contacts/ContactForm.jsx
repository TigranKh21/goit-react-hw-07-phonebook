import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsReducer';

import { nanoid } from 'nanoid';

import { getContacts } from '../../redux/selectors';

import css from './Contact.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    e.target.reset();
  };

  const handleAddContact = formData => {
    const hasDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicate) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newContact = { ...formData, id: 'id-' + nanoid(2) };
    const action = addContact(newContact);
    dispatch(action);
  };

  return (
    <div>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.contactNameLabel}>Name</label>
        <input
          className={css.inputField}
          type="text"
          placeholder="Contact name"
          name="name"
          required
        />
        <label className={css.contactNameLabel}>Number</label>
        <input
          className={css.inputField}
          type="tel"
          placeholder="Phone number"
          name="number"
          required
        />
        <button type="submit" className={css.contactBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
