import React from 'react';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChangeFilter }) => (
  <article>
    <form className={styles.form}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          className={styles.label}
        />
      </label>
    </form>
  </article>
);

export default ContactFilter;
