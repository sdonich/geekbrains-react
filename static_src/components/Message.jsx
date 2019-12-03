import React from 'react';

const Message = ({ text, author }) => {
  return (
    <div>
      {author} : {text}
    </div>
  )
}

export default Message;