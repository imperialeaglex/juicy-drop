import styles from './toggle.module.css';

const Toggle = () => (
  <div className={styles.centering}>
    <label className={styles.switch}>
      <input type='checkbox'/>
      <span className={styles.slider}></span>
    </label>
  </div>
);

export { Toggle };
