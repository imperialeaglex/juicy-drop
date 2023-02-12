import { FC } from 'react';
import bgVector from '../../assets/item-bg-vector.svg';
import itemImage from '../../assets/item.png';
import styles from './itemInContractCard.module.css';

interface Props {
  type: string;
  name: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
}

const ItemInContractCard: FC<Props> = ({ type, name, width = '199px', height = '189px', isDisabled = false }) => {
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
      <span className={styles.price}>$31.03</span>
      <button className={styles.addToContract}>Добавить в контракт</button>
      {isDisabled ? <div className={styles.disabled} /> : null}
    </div>
  );
};

export { ItemInContractCard };
