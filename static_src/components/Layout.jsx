import React from 'react';
import MessageField from './MessageField';
import { ChatList } from './ChatList';
import { Header } from './Header';
import '../styles/layout.css';

export default class Layout extends React.Component {
  static defaultProps = {
    chatId: 1,
  };
  
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="messages-content">
          <div className="chatlist">
            <ChatList />
          </div>
          <div className="chat">
            <MessageField chatId={this.props.chatId} />
          </div>
        </div>
      </div>
    )
  }
}
