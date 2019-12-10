import React from 'react';
import MessageField from './MessageField';
import { ChatList } from './ChatList';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <ChatList />
      <MessageField />
    </div>
  )
}
