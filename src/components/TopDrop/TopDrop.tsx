import { useState } from 'react';
import itemImg from '../../assets/item.png';
import styles from './topDrop.module.css';
import topDropBg from '../../assets/top-drop-bg.png';
import caseImg from '../../assets/case.png';
const TopDrop = () => {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <div className={styles.container} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className={styles.left}>
        <span className={styles.description}>
          Шикарный дроп!
        </span>
        <div className={styles.about}>
          <span className={styles.type}>CZ75-Auto</span>
          <span className={styles.name}>Демонтаж</span>
        </div>
      </div>
      <img width={103} height={76} src={itemImg} alt='' className={styles.image} />
      <img src={topDropBg} alt='' className={styles.bgLines} />
      <div className={styles.bg}/>
      <div className={styles.rectangle}/>
      {isHover ? <div className={styles.hover}>
        <img src={caseImg} alt='' width={99} height={99}/>
        <div className={styles.right}>
          <span className={styles.caseName}>S1mple</span>
          <div className={styles.stroke}/>
          <div className={styles.nameAndAvatar}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='' width={30} height={30} className={styles.avatar}/>
            <span className={styles.name}>um4ik</span>
          </div>
        </div>
      </div> : null}
    </div>
  )
}

export { TopDrop };
