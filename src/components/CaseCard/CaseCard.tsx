import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import caseImage from '../../assets/case.png';
import styles from './caseCard.module.css';
import { ProgressCircle } from './components/progressCircle';

interface Props {
  price: number;
  discountedPrice?: number;
  totalCount: number;
  availableCount: number;
  name: string;
  disabled?: boolean;
}

const CaseCard: FC<Props> = ({ discountedPrice, price, name, availableCount, totalCount, disabled = false }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`${styles.cardContainer} ${disabled ? styles.disabled : ''}`} onClick={() => navigate('/case')}>
      <img src={caseImage} alt='' className={styles.image}/>
      <div className={styles.priceContainer}>
        <div className={styles.currentPrice}>{typeof discountedPrice === 'undefined' ? price : discountedPrice}₽</div>
        {typeof discountedPrice === 'undefined' ? null : <span className={styles.oldPrice}>{price}₽</span>}
      </div>
      <span>{name}</span>
      <div className={styles.countContainer}>
        <ProgressCircle/>
        <span className={styles.count}><span className={styles.availableCount}>{availableCount}</span> / <span
          className={styles.totalCount}>{totalCount}</span></span>
      </div>
    </div>
  );
};

export { CaseCard };
