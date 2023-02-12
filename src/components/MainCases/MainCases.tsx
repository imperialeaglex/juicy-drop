import { CaseCard } from '../CaseCard/CaseCard';
import styles from './mainCases.module.css';
import limitedLeftImg from '../../assets/limited-left.png';
import limitedRightImg from '../../assets/limited-right.png';
import limitedCenter from '../../assets/limited-center.svg';
import ourAssembliesLeft from '../../assets/our-assemblies-left.png';
import ourAssembliesRight from '../../assets/our-assemblies-right.png';
import ourAssembliesCenter from '../../assets/our-assemblies-center.svg';

const MainCases = () => {
  return (
    <main className={styles.container}>
      <div className={styles.limitedHeaderContainer}>
        <div className={styles.rectangle}/>
        <img src={limitedLeftImg} alt='' className={styles.limitedLeftImg}/>
        <img src={limitedRightImg} alt='' className={styles.limitedRightImg}/>
        <img src={limitedCenter} alt='' className={styles.limitedCenterImg}/>
        <h2 className={styles.limitedHeader}>ОГРАНИЧЕННАЯ СЕРИЯ</h2>
        <div className={styles.rectangle}/>
      </div>
      <div className={styles.limitedEditionCases}>
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' discountedPrice={479} />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' discountedPrice={479} disabled />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' discountedPrice={479} />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' disabled />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
      </div>
      <div className={styles.limitedHeaderContainer}>
        <div className={styles.rectangle}/>
        <img src={ourAssembliesLeft} alt='' className={styles.limitedLeftImg}/>
        <img src={ourAssembliesRight} alt='' className={styles.limitedRightImg}/>
        <img src={ourAssembliesCenter} alt='' className={styles.limitedCenterImg}/>
        <h2 className={styles.limitedHeader}>НАШИ СБОРКИ</h2>
        <div className={styles.rectangle}/>
      </div>
      <div className={styles.limitedEditionCases}>
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
        <CaseCard price={685} totalCount={9999} availableCount={8324} name='Riptide' />
      </div>
    </main>
  )
}

export { MainCases };
