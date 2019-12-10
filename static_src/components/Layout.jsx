import React from 'react';
import MessageField from './MessageField';
import { ChatList } from './ChatList';
import { Header } from './Header';
import '../styles/layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="messages-content">
        <div className="chatlist">
          <ChatList />
        </div>
        <div className="chat">
          <MessageField />
        </div>
      </div>
    </div>
  )
}
