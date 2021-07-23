import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={styles.filter__wrapper}>
    <label className={styles.filter__label}>
      Find contacts by name
      <input
        className={styles.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
