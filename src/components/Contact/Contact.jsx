import css from "./Contact.module.css";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ data: { name, phone, id } }) => {
  const dispatch = useDispatch();

    return (
      <div className={css.contact}>
        <div className={css.info}>
          <p className={css.name}>
            <BsPersonCircle /> {name}
          </p>
          <span className={css.name}>
            <BsTelephoneFill /> {phone}
          </span>
        </div>
        <button className={css.btn} onClick={() => dispatch(deleteContact(id)
          )}>
          Delete
        </button>
      </div>
 );
};

export default Contact;