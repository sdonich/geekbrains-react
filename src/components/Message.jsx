import React from 'react';

export const Message = props => {
  return (
    <div
      className="message"
      style={{
        alignSelf: props.sender === 'bot' ?
          'flex-start' : 'flex-end'
      }}
    >
      <div>{props.text}</div>
      <div className="message-sender">{props.sender}</div>
    </div>
  )
}