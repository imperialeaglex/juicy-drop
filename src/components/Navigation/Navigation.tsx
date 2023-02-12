import caseActiveIcon from '../../assets/icons/case-active-icon.svg';
import caseIcon from '../../assets/icons/case-icon.svg';
import contractActiveIcon from '../../assets/icons/contract-active-icon.svg';
import contractIcon from '../../assets/icons/contract-icon.svg';
import upgradeActiveIcon from '../../assets/icons/upgrade-active-icon.svg';
import upgradeIcon from '../../assets/icons/upgrade-icon.svg';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <NavigationItem activeIcon={caseActiveIcon} defaultIcon={caseIcon} name='КЕЙСЫ' route='cases'/>
      <div className={styles.rectangle}/>
      <NavigationItem activeIcon={contractActiveIcon} defaultIcon={contractIcon} name='КОНТРАКТЫ' route='contract'/>
      <div className={styles.rectangle}/>
      <NavigationItem activeIcon={upgradeActiveIcon} defaultIcon={upgradeIcon} name='АПГРЕЙДЫ' route='upgrade'/>
    </div>
  );
};

export { Navigation };
