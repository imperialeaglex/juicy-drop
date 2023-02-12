import { FC } from 'react';
import bgVector from '../../assets/item-bg-vector.svg';
import itemImage from '../../assets/item.png';
import styles from './itemInInventoryCard.module.css';

interface Props {
  type: string;
  name: string;
  caseCard?: boolean;
  width?: string;
  height?: string;
}

const ItemInInventoryCard: FC<Props> = ({ type, name, caseCard = false, width = '199px', height = '189px' }) => {
  return (
    <div className={styles.container} style={{ maxWidth: width, maxHeight: height }}>
      <img className={styles.bgVector} src={bgVector}/>
      <div className={styles.light}/>
      <div className={styles.light2}/>
      <div className={styles.typeAndName}>
        <img src={itemImage} height={76} width={100} className={styles.img}/>
        <span className={styles.type}>{type}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.rectangle}/>
      <div className={styles.bg}/>
      {caseCard ? null : (<><span className={styles.price}>$30.03</span>
        <div className={styles.status}>$</div>
      </>)}
    </div>
  );
};

export { ItemInInventoryCard };
