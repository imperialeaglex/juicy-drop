import { FC } from 'react';
import contractField from '../../assets/contract-field.svg';
import styles from './contractFields.module.css';

interface Props {
  item?: string;
  index: number;
}

const ContractField: FC<Props> = ({ item, index }) => {
  return (
    <div className={styles.container}>
      <img src={contractField} alt='' width={200} height={200}/>
      {item ? <img src={item} alt=''/> : <div className={styles.index}>{index}</div>}
    </div>
  )
}

export { ContractField };
