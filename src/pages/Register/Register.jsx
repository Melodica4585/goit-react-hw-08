import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import css from './Register.module.css';

export default function Register() {
  return (
    <div className={css.container}>
      <RegisterForm />
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
    </div>
  );
}