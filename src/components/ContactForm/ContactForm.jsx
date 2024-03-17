import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contacts/contactsOps';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 symbols')
      .max(20, 'Max length is 20')
      .required('Name is required'),
    number: Yup.string()
      .min(7, 'Number must be at least 7 symbols')
      .required('A phone number is required'),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, action) => {
          dispatch(addContact(values));
          action.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={phoneFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.submit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;