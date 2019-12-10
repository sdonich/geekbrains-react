import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';

export const ChatList = () => {
  return (
    <List>
      <ListItem primaryText="Виктор" leftIcon={<ContentSend />} />
      <ListItem primaryText="Саша" leftIcon={<ContentSend />} />
      <ListItem primaryText="Маша" leftIcon={<ContentSend />} />
    </List>
  )
}