import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const isAtContacts = contacts.find(contact => contact.name === name);
    if (isAtContacts) {
      alert('Already in Contacts');
      return;
    }
    const newContact = { name, number, id: nanoid() };
    const action = addContact(newContact);
    dispatch(action);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
