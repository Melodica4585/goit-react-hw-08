import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

export const SearchBox = () => {
  const inputId = useId();
  const dispatch = useDispatch();

  const reduxInputFilter = useSelector(selectNameFilter);

  return (
    <div className={css.search}>
      <label htmlFor="{inputId}">Find contacts by name</label>
      <input
        className={css.input}
        id={inputId}
        type="text"
        value={reduxInputFilter}
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </div>
  );
}

export default SearchBox;