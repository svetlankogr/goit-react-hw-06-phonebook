import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
