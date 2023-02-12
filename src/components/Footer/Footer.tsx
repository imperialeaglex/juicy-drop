import logo from '../../assets/Logo.svg';
import styles from './footer.module.css';
import arrowUpIcon from '../../assets/icons/arrow-up-icon.svg';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt=''/>
          <div className={styles.description}>
            <span>© 2021 JUICYDROP</span>
            <span>На нашем сайте вы можете открыть различные кейсы GM по самым выгодным ценам</span>
          </div>
        </div>
        <div className={styles.right}>
          <span>Пользовательское соглашение</span>
          <span>Контакты</span>
          <a href='#header'><button className={styles.button}>
            <img src={arrowUpIcon} alt=''/>
          </button></a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
