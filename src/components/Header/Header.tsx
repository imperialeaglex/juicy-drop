import { useState } from 'react';
import arrowDownIcon from '../../assets/icons/arrow-down-icon.svg';
import onlineIcon from '../../assets/icons/onlineIcon.svg';
import russiaIcon from '../../assets/icons/russia-icon.svg';
import steamIcon from '../../assets/icons/steam-icon.svg';
import volumeOff from '../../assets/icons/volumeOff.svg';
import volumeOn from '../../assets/icons/volumeOn.svg';
import logo from '../../assets/Logo.svg';
import { Navigation } from '../Navigation/Navigation';
import styles from './header.module.css';
import plusIcon from '../../assets/icons/plus.svg';
import bellIcon from '../../assets/icons/bell.svg';
import signOut from '../../assets/icons/sign-out.svg';
import skinpay from '../../assets/skinpay.png';
import cross from '../../assets/icons/cross.svg';

const Header = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <>
      {isPaymentOpen ? <div className={styles.paymentDialog}>
        <div className={styles.paymentInnerDialog}>
          <span className={styles.paymentHeading}>Пополнить баланс</span>
          <div className={styles.paymentSelectCategories}>
            <button className={styles.paymentSelectCategoryButton}>Все</button>
            <button className={styles.paymentSelectCategoryButton}>Деньги</button>
            <button className={styles.paymentSelectCategoryButton}>Банки</button>
            <button className={styles.paymentSelectCategoryButton}>Крипта</button>
            <button className={styles.paymentSelectCategoryButton}>Телефон</button>
            <button className={styles.paymentSelectCategoryButton}>Скины</button>
          </div>
          <div className={styles.paymentButtons}>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
            <button className={styles.paymentButton}>
              <img src={skinpay} alt='' width={118} height={23}/>
            </button>
          </div>
          <div className={styles.paymentDetails}>
            <span className={styles.sumOfPaymentTitle}>Сумма пополнения</span>
            <input type='text' className={styles.sumOfPaymentInput}/>
            <input type='text' className={styles.promoInput} placeholder='У меня есть промокод'/>
          </div>
          <button className={styles.closeButton} onClick={() => setIsPaymentOpen(false)}><img src={cross} alt=''/></button>
          <button className={styles.paymentFinalButton}>Пополнить</button>
        </div>
      </div> : null}
    <header className={styles.header} id='header'>
      <div className={styles.onlineWrapper}>
        <img src={onlineIcon} alt='icon'/>
        <span className={styles.onlineContainer}><span className={styles.online}>Онлайн:</span> 1 250</span>
      </div>
      <div className={styles.soundWrapper}>
        <img src={isSoundOn ? volumeOn : volumeOff} width={16} height={16} alt='icon' className={styles.sound}
             onClick={() => setIsSoundOn((prev) => !prev)}/>
        <span className={`${styles.onlineContainer} ${isSoundOn ? '' : styles.soundOff}`}><span
          className={styles.online}>Звук:</span> {isSoundOn ? 'Вкл' : 'Выкл'}</span>
      </div>
      <div className={styles.languageWrapper}>
        <img src={russiaIcon} alt=''/>
        <span className={styles.languageName}>RUS</span>
        <img src={arrowDownIcon} alt=''/>
      </div>
      <div className={styles.center}>
        <Navigation/>
        <img src={logo} alt='logo' className={styles.logo}/>
        {isLogin ? <div className={styles.userContainer}>
          <div className={styles.balanceContainer}>
            <span className={styles.balance}>5 083.33₽</span>
            <button className={styles.addButton}><img src={plusIcon} alt='' onClick={() => setIsPaymentOpen(true)}/></button>
          </div>
          <img src={bellIcon} alt=''/>
          <img src='https://avatars.mds.yandex.net/i?id=580a8406187df7931d4ca34fba2f351803d1fe43-8254804-images-thumbs&n=13' alt='' width={60} height={60} className={styles.avatar}/>
          <span className={styles.username}>Juicy Drop_User</span>
          <button className={styles.logoutButton} onClick={() => setIsLogin(false)}><img src={signOut} alt='' width={16} height={16}/></button>
        </div> : <button className={styles.loginWithSteam} onClick={() => setIsLogin(true)}>
          <img src={steamIcon} alt=''/>
          <span>Авторизация</span>
        </button>}
      </div>
    </header>
    </>
  );
};

export { Header };
