import styles from './chatMessage.module.css';

const ChatMessage = () => {
  return (
    <div className={styles.container}>
      <img src='https://avatars.mds.yandex.net/i?id=580a8406187df7931d4ca34fba2f351803d1fe43-8254804-images-thumbs&n=13'
           className={styles.avatar} alt='' width={54} height={54}/>
      <div className={styles.content}>
        <div className={styles.nameAndTime}>
          <span className={styles.name}>Gefik StandOff2</span>
          <span className={styles.time}>03:57</span>
        </div>
        <p className={styles.message}>GMDROP, Здравствуйте, если у меня есть рубли я балике, можно их в золото
                                      поменять?</p>
      </div>
    </div>
  );
};

export { ChatMessage };
