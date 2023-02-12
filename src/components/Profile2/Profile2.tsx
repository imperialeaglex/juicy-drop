import { useState } from 'react';
import caseImg from '../../assets/case.png';
import caseIcon from '../../assets/icons/case-icon.svg';
import profileBg from '../../assets/profile-bg.png';
import { ItemInInventoryCard } from '../ItemInInventoryCard/ItemInInventoryCard';
import { RefTableRow } from '../RefTableRow/RefTableRow';
import { Toggle } from '../Toggle/Toggle';
import styles from './profile2.module.css';
import itemImg from '../../assets/item.png';
import plusIcon from '../../assets/icons/plus.svg';
import linkIcon from '../../assets/icons/link.svg';
import copyIcon from '../../assets/icons/copy-icon.svg';
import sellIcon from '../../assets/icons/sell-icon.svg';
import copyActive from '../../assets/icons/copy-active.svg';

const Profile2 = () => {
  const [isCopy, setIsCopy] = useState(false);
  
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
            <button className={styles.addBalance}>
              <span>Пополнить</span>
              <img src={plusIcon} alt='' width={18} height={18}/>
            </button>
            <button className={styles.steamButton}>
              <span>Трей-ссылка</span>
              <img src={linkIcon} alt='' width={18} height={18}/>
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
      <div className={styles.ref}>
        <h2 className={styles.refHeading}>Реферальная система</h2>
        <span className={styles.refYourRef}>Ваш реферальный код</span>
        <div className={styles.refLinkContainer}>
          <span>https://juicydrop.gg/ref/bbn46GBG324GF</span>
          <button onClick={() => {
            navigator.clipboard.writeText('https://juicydrop.gg/ref/bbn46GBG324GF');
            setIsCopy(true);
          }} className={styles.copyLink}><img src={isCopy ? copyActive : copyIcon} alt='' className={styles.copyIcon}/></button>
        </div>
        <div className={styles.refTable}>
          <div className={styles.refTableHeadings}>
            <span className={styles.refTableHeading}>Уровень</span>
            <span className={styles.refTableHeading}>Депозит</span>
            <span className={styles.refTableHeading}>Ваш бонус</span>
            <span className={styles.refTableHeading}>Реферальный бонус</span>
          </div>
          <RefTableRow level={5} deposit={300} bonus={25} refBonus={5} />
          <RefTableRow level={4} deposit={300} bonus={25} refBonus={5} />
          <RefTableRow level={3} deposit={300} bonus={25} refBonus={5} />
          <RefTableRow level={2} deposit={300} bonus={25} refBonus={5} />
          <RefTableRow level={1} deposit={300} bonus={25} refBonus={5} />
        </div>
      </div>
      <div className={styles.navWrapper}>
        <div className={styles.navWrapper2}>
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
          <div className={styles.sellContainer}>
            <span className={styles.availableForSell}>ДОСТУПНО ДЛЯ ПРОДАЖИ</span>
            <Toggle />
            <button className={styles.sellAllButton}>
              <span>Продать всё</span>
              <img src={sellIcon} alt=''/>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.itemsContainerContent}>
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
          <ItemInInventoryCard type='FAMAS' name='Стикс' />
        </div>
      </div>
    </main>
  );
};

export { Profile2 };
