import { ItemInInventoryCard } from '../ItemInInventoryCard/ItemInInventoryCard';
import { Toggle } from '../Toggle/Toggle';
import styles from './Case.module.css';
import fogImg from '../../assets/fog.png';
import backIcon from '../../assets/icons/back-icon.svg';
import caseImg from '../../assets/case.png';
import calculatorIcon from '../../assets/icons/calculator-icon.svg';
import openFastIcon from '../../assets/icons/open-fast-icon.svg';
import rouletteTopIcon from '../../assets/icons/roulette-top-icon.svg';
import rouletteBottomIcon from '../../assets/icons/roulette-bottom-icon.svg';

const Case = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backBtn}><img src={backIcon} alt=''/></button>
          <h2 className={styles.caseName}>COLIZEUM</h2>
          <img src={fogImg} alt='' className={styles.fogImg}/>
        </div>
        <div className={styles.content}>
          <div className={styles.caseImg}>
            <img src={caseImg} alt=''/>
          </div>
          <div className={styles.main}>
            <div className={styles.roulette}>
              <img src={rouletteTopIcon} alt='' className={styles.rouletteTopIcon}/>
              <img src={rouletteBottomIcon} alt='' className={styles.rouletteBottomIcon}/>
              <div className={styles.rouletteFogLeft}/>
              <div className={styles.rouletteFogRight}/>
              <div className={styles.rouletteContent}>
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='189px' height='240px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
                <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' width='150px' height='140px' />
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles.countContainer}>
                <div className={styles.countHeader}>
                  <img src={calculatorIcon} alt=''/>
                  <span className={styles.countDescription}>Выберите множитель</span>
                </div>
                <div className={styles.countButtons}>
                  <button className={styles.countButton}>x1</button>
                  <button className={styles.countButton}>x2</button>
                  <button className={styles.countButton}>x3</button>
                  <button className={styles.countButton}>x4</button>
                  <button className={styles.countButton}>x5</button>
                </div>
              </div>
              <div className={styles.buyButtonContainer}>
                <div className={styles.buyButtonRectangle}/>
                <button className={styles.buyButton}>Открыть за 9999₽</button>
                <div className={styles.buyButtonRectangle}/>
              </div>
              <div className={styles.openFastContainer}>
                <img src={openFastIcon} alt='' width={16} height={16} />
                <span className={styles.openFastTitle}>Открывать быстро</span>
                <Toggle />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseContentTitle}>
          <div className={styles.caseContentRectangleLeft}/>
          <p>СОДЕРЖИМОЕ КЕЙСА</p>
          <div className={styles.caseContentRectangleRight}/>
        </div>
        <div className={styles.caseContent}>
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
          <ItemInInventoryCard caseCard={true} type='USP-S' name='Бизнес-класс' />
        </div>
      </div>
    </div>
  )
}

export { Case };
