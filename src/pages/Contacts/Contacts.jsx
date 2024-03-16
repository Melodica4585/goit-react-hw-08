import { useEffect } from 'react';
import css from './Contacts.module.css';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { Blocks } from 'react-loader-spinner';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/selectors';
import { Helmet } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const visibleUsers = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {(users.length === 0 || visibleUsers.length === 0)}
      {loading && (
        <Blocks
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
        />
      )}
      <div className={loading ? css.overlay : css.none}></div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
    </div>
  );
}