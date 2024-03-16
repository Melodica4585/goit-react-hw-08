import css from './HomeContent.module.css';

export const HomeContent = () => {
  return (
    <div className={css.container}>
      <p className={css.phone}>📲</p>
      <h1 className={css.title}>Phonebook App</h1>
      <p className={css.log}>Please log in to add your first contact</p>
    </div>
  );
};