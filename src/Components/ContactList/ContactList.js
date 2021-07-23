import styles from './ContactList.module.css';

const ContactList = ({ filteredEl, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {filteredEl.map(contact => (
      <li className={styles.contactList__item} key={contact.id}>
        {contact.name} {contact.number}
        <button
          className={styles.contactList__button}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
