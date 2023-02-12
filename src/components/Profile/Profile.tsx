import caseImg from '../../assets/case.png';
import caseIcon from '../../assets/icons/case-icon.svg';
import steamBlueIcon from '../../assets/icons/steam-blue-icon.svg';
import profileBg from '../../assets/profile-bg.png';
import styles from './profile.module.css';
import itemImg from '../../assets/item.png';
import itemsBg from '../../assets/icons/items-bg.svg';

const Profile = () => {
  return (
    <main className={styles.main}>
      <div className={styles.topRow}>
        <div className={styles.about}>
          <div className={styles.mainInfo}>
            <img
              src='https://avatars.mds.yandex.net/i?id=580a8406187df7931d4ca34fba2f351803d1fe43-8254804-images-thumbs&n=13'
              className={styles.avatar} width={60} height={60} alt=''/>
            <div className={styles.nameAndBalance}>
              <span className={styles.name}>Juicy Drop_User</span>
              <span className={styles.balance}>5 083.33₽</span>
            </div>
            <button className={styles.steamButton}>
              <span>Steam</span>
              <img src={steamBlueIcon} alt='' width={18} height={18}/>
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statHeader}>
                <img src={caseIcon} alt=''/>
                <span className={styles.statName}>Кейсы</span>
              </div>
              <div className={styles.statValue}><span>274354</span></div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statHeader}>
                <img src={caseIcon} alt=''/>
                <span className={styles.statName}>Контракты</span>
              </div>
              <div className={styles.statValue}><span>8513</span></div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statHeader}>
                <img src={caseIcon} alt=''/>
                <span className={styles.statName}>Апгрейды</span>
              </div>
              <div className={styles.statValue}><span>869</span></div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statHeader}>
                <img src={caseIcon} alt=''/>
                <span className={styles.statName}>С момента авторизации</span>
              </div>
              <div className={styles.statValue}><span>1д.23ч.48мин</span></div>
            </div>
          </div>
        </div>
        <div className={styles.loveCase}>
          <span className={styles.loveCaseHeading}>ЛЮБИМЫЙ КЕЙС</span>
          <span className={styles.loveCaseName}>Чай</span>
          <img src={caseImg} alt='' className={styles.loveCaseImage}/>
        </div>
        <div className={styles.loveDrop}>
          <span className={styles.loveDropHeading}>ЛЮБИМЫЙ ДРОП</span>
          <p><span className={styles.loveDropType}>АК-47</span> <span
            className={styles.loveDropName}>Неоновая революция</span></p>
          <img src={itemImg} alt='' className={styles.loveDropImage}/>
        </div>
        <img src={profileBg} alt='' className={styles.profileBg}/>
      </div>
      <div className={styles.nav}>
        <button className={styles.navButton}>
          <img src={caseIcon} alt=''/>
          <span>КЕЙСЫ</span>
          <span className={styles.navValue}>5</span>
        </button>
        <button className={styles.navButton}>
          <img src={caseIcon} alt=''/>
          <span>КОНТРАКТЫ</span>
          <span className={styles.navValue}>100</span>
        </button>
        <button className={styles.navButton}>
          <img src={caseIcon} alt=''/>
          <span>АПГРЕЙДЫ</span>
          <span className={styles.navValue}>5</span>
        </button>
      </div>
      <div className={styles.itemsContainer}>
        <img src={itemsBg} alt='' className={styles.itemsBg}/>
        <span className={styles.noItemsTitle}>Нет предметов</span>
        <span className={styles.noItemsDescription}>Начните открывать кейсы</span>
      </div>
    </main>
  );
};

export { Profile };
