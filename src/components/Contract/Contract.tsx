import { ContractField } from '../ContractField/ContractField';
import { ItemInContractCard } from '../ItemInContractCard/ItemInContractCard';
import { ItemInInventoryCard } from '../ItemInInventoryCard/ItemInInventoryCard';
import styles from './contract.module.css';
import contractBg from '../../assets/contract-bg.png';
import contractStatusBg from '../../assets/contract-status-bg.png';
import createContractIcon from '../../assets/icons/create-contract-icon.svg';

const Contract = () => {
  return (
    <div className={styles.container}>
      <img src={contractBg} alt='' className={styles.contractBg}/>
      <h1 className={styles.heading}>КОНТРАКТЫ</h1>
      <div className={styles.contractFields}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => <ContractField index={el} />)}
      </div>
      <div className={styles.underContract}>
        <div className={styles.contractStatusContainer}>
          <img src={contractStatusBg} alt='' className={styles.contractStatusBg}/>
          <div className={styles.left}>
            <span className={styles.selectedItemCount}>1 <span className={styles.white}>/ 10</span></span>
            <span className={styles.contractStatusDescription}>Выбрано предметов</span>
          </div>
          <div className={styles.right}>
            <span className={styles.currentSum}>0</span>
            <span className={styles.contractStatusDescription}>Мин.10р Макс. 20 000р</span>
          </div>
        </div>
        <div className={styles.createContractContainer}>
          <span>Добавьте минимум 3 предмета</span>
          <button className={styles.createContractButton}>
            <span>Создать контракт</span>
            <img src={createContractIcon} alt=''/>
          </button>
        </div>
        <div className={styles.earnContainer}>
          <span className={styles.earnDescription}>Получите скин ценой</span>
          <span className={styles.earnValue}>0 - 0P</span>
        </div>
      </div>
      <div className={styles.itemsForContractTitle}>
        <div className={styles.itemsForContractRectangleLeft}/>
        <p>ПРЕДМЕТЫ ДЛЯ КОНТРАКТА</p>
        <div className={styles.itemsForContractRectangleRight}/>
      </div>
      <div className={styles.contractItems}>
        <ItemInContractCard type='USP-S' isDisabled name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
        <ItemInContractCard type='USP-S' name='Бизнес-класс' />
      </div>
    </div>
  )
}

export { Contract };
