import { FC } from 'react';
import styles from './refTableRow.module.css';
import refBg from '../../assets/ref-bg.png';

interface Props {
  level: number;
  deposit: number;
  bonus: number;
  refBonus: number;
}

const RefTableRow: FC<Props> = ({ level, refBonus, bonus, deposit }) => {
  return (
    <div className={styles.container}>
      <img className={styles.bg} src={refBg} alt=''/>
      <span className={styles.level}>{level}</span>
      <span className={styles.deposit}>{deposit}₽</span>
      <span className={styles.bonus}>{bonus}%</span>
      <span className={styles.bonus}>{refBonus}% к депозиту</span>
    </div>
  )
}

export { RefTableRow };
