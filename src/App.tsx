import React, { useState } from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import styles from './app.module.css';
import chatIcon from './assets/icons/chat-icon.svg';
import { Case } from './components/Case/Case';
import { Chat } from './components/Chat/Chat';
import { Contract } from './components/Contract/Contract';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeaderItems } from './components/HeaderItems/HeaderItems';
import { MainCases } from './components/MainCases/MainCases';
import { Profile } from './components/Profile/Profile';
import { Profile2 } from './components/Profile2/Profile2';
import { Upgrade } from './components/Upgrade/Upgrade';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={isChatOpen ? styles.wrapperWithChat : styles.wrapper}>
          <Header/>
          <HeaderItems/>
          <div className={styles.routerWrapper}>
            <Routes>
              <Route path='/' element={<MainCases />} />
              <Route path='/upgrade' element={<Upgrade />} />
              <Route path='/cases' element={<MainCases />} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/profile2' element={<Profile2/>} />
              <Route path='/contract' element={<Contract/>} />
              <Route path='/case' element={<Case/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
        {isChatOpen ? <Chat onCloseChat={() => setIsChatOpen(false)}/> :
          <button onClick={() => setIsChatOpen(true)} className={styles.chatButton}><img src={chatIcon} alt=''/>
          </button>}
      </div>
    </BrowserRouter>
  );
}

export default App;
