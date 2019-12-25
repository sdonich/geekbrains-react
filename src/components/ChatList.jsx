import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import { Link } from 'react-router-dom'

export const ChatList = () => {
  return (
    <List>
      <Link to="/chat/1/">
        <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
      </Link>
      <Link to="/chat/2/">
        <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
      </Link>
      <Link to="/chat/3/">
        <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
      </Link>
    </List>
  )
}