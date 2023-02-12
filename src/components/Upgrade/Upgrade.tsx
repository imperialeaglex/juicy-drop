import { useState } from 'react';
import bottomBg2 from '../../assets/bottom-upgrade-2.svg';
import bottomBg from '../../assets/bottom-upgrade-bg.svg';
import middleBg from '../../assets/middle-upgrade-1.svg';
import middleBg2 from '../../assets/middle-upgrade-2.svg';
import middleBg3 from '../../assets/middle-upgrade-3.svg';
import topBg2 from '../../assets/top-upgrade-2.svg';
import defaultUpgradeItem from '../../assets/upgrade-default-weapon.png';
import topBg from '../../assets/upgrade-top-bg.svg';
import rightBg from '../../assets/right-upgrade.svg';
import styles from './upgrage.module.css';

const Upgrade = () => {
  const [yourItem, setYourItem] = useState<null | string>(null);
  const [desiredItem, setDesiredItem] = useState<null | string>(null);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedRight, setSelectedRight] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src={topBg} alt='' className={styles.topBg}/>
        <img src={topBg2} alt='' className={styles.topBg2}/>
        <img src={middleBg} alt='' className={styles.middleBg}/>
        <img src={middleBg2} alt='' className={styles.middleBg2}/>
        <img src={middleBg3} alt='' className={styles.middleBg3}/>
        <img src={bottomBg} alt='' className={styles.bottomBg}/>
        <img src={bottomBg2} alt='' className={styles.bottomBg2}/>
        <img src={rightBg} alt='' className={styles.rightBg}/>
        <button className={`${styles.rightSelect1} ${selectedRight === 1 ? styles.selectedRight : ''}`} onClick={() => setSelectedRight(1)}>1</button>
        <button className={`${styles.rightSelect2} ${selectedRight === 2 ? styles.selectedRight : ''}`} onClick={() => setSelectedRight(2)}>2</button>
        <button className={`${styles.rightSelect3} ${selectedRight === 3 ? styles.selectedRight : ''}`} onClick={() => setSelectedRight(3)}>3</button>
        <button className={`${styles.rightSelect4} ${selectedRight === 4 ? styles.selectedRight : ''}`} onClick={() => setSelectedRight(4)}>4</button>
        <button className={`${styles.rightSelect5} ${selectedRight === 5 ? styles.selectedRight : ''}`} onClick={() => setSelectedRight(5)}>5</button>
        <div className={styles.light}/>
        <div className={styles.chance}>
          <span className={styles.valueOfChance}>0%</span>
          <span className={styles.textOfChance}>НИЗКИЙ ШАНС</span>
        </div>
        <div className={styles.topRectangle}/>
        <div className={styles.left}>
          <span className={styles.selectYourItemTitle}>Выберите предмет, который хотите улучшить</span>
          <img src={yourItem ? yourItem : defaultUpgradeItem} alt=''/>
          <div className={styles.itemFromContainer}>
            <div className={styles.itemFromCategorySelect}>
              <div className={`${styles.yellowLine} ${selectedCategory === 1 ? styles.visible : ''}`}/>
              <button className={`${styles.itemFromCategorySelectButton} ${selectedCategory === 1 ? styles.selectedCategory : ''}`} onClick={() => setSelectedCategory(1)}>ПРЕДМЕТ
              </button>
            </div>
            <div className={styles.itemFromCategorySelect}>
              <div className={`${styles.yellowLine} ${selectedCategory === 2 ? styles.visible : ''}`}/>
              <button className={`${styles.itemFromCategorySelectButton} ${selectedCategory === 2 ? styles.selectedCategory : ''}`} onClick={() => setSelectedCategory(2)}>БАЛАНС
              </button>
            </div>
          </div>
        </div>
        <div className={styles.middle}><button>Апгрейд</button></div>
        <div className={styles.right}>
          <span className={styles.selectYourItemTitle}>Выберите предмет, который хотите улучшить</span>
          <img src={desiredItem ? desiredItem : defaultUpgradeItem} alt=''/>
        </div>
      </div>
    </div>
  );
};

export { Upgrade };
