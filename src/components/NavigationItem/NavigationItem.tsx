import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './navigationItem.module.css';

interface Props {
  activeIcon: string;
  defaultIcon: string;
  name: string;
  route: string;
}

const NavigationItem: FC<Props> = ({ activeIcon, defaultIcon, name, route }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = location.pathname.slice(1) === route || route === 'cases' && location.pathname === '/';
  console.log(location);
  
  return (
    <div className={styles.container} onClick={() => navigate(route)}>
      <img src={isActive ? activeIcon : defaultIcon} className={styles.icon} alt=''/>
      <span className={`${styles.name} ${isActive ? styles.active : ''}`}>{name}</span>
      {isActive ? <div className={styles.rectangle}></div> : null}
    </div>
  );
}

export { NavigationItem };
