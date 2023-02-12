import { FC } from 'react';
import closeChatIcon from '../../assets/icons/close-chat-icon.svg';
import sendIcon from '../../assets/icons/send-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chat.module.css';

const Chat: FC<{ onCloseChat: () => void }> = ({ onCloseChat }) => {
  return (
    <div className={styles.container}>
      <div className={styles.chatHeader}>
        <button className={styles.closeButton} onClick={onCloseChat}>
          <img src={closeChatIcon} alt=''/>
        </button>
        <div className={styles.headerWrapper}>
          <span className={styles.chatHeading}>ЧАТ</span>
          <div className={styles.chatOnlineContainer}>
            <img src={userIcon} alt=''/>
            <span className={styles.chatOnline}>825</span>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>
      <div className={styles.chatFooter}>
        <textarea className={styles.input} placeholder='Введите сообщение'/>
        <button className={styles.sendBtn}>
          <span>Отправить</span>
          <img src={sendIcon} alt=''/>
        </button>
      </div>
    </div>
  );
};

export { Chat };
