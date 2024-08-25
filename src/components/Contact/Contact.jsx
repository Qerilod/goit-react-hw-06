import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contact}>
      <span className={s.text}>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
      </span>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
