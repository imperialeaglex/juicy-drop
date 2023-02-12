import { FC, useState } from 'react';
import caseImg from '../../assets/case.png';
import styles from './itemCard.module.css';
import bgVector from '../../assets/item-bg-vector.svg';
import itemImage from '../../assets/item.png';

interface Props {
  type: string;
  name: string;
}

const ItemCard: FC<Props> = ({ type, name }) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <div className={styles.container} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <img className={styles.bgVector} src={bgVector}/>
      <div className={styles.light}/>
      <div className={styles.light2}/>
      <div className={styles.typeAndName}>
        <img src={itemImage} height={76} width={100} className={styles.img} alt=''/>
        <span className={styles.type}>{type}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.rectangle}/>
      <div className={styles.bg}/>
      {isHover ? <div className={styles.hover}>
        <img src={caseImg} alt='' width={74} height={74}/>
        <span className={styles.username}>um4ik</span>
      </div> : null}
    </div>
  );
}

export { ItemCard };
