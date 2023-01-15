import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={e => {
            const action = filterContacts(e.target.value);
            dispatch(action);
          }}
        />
      </label>
    </form>
  );
};
