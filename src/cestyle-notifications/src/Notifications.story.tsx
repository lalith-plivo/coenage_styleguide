import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { storiesOf } from '@storybook/react';
import { Button, Group, CeStyleProvider } from '@cestyle/core';
import { showNotification, updateNotification } from './events';
import { NotificationsProvider } from './NotificationsProvider/NotificationsProvider';

function NotificationsDemo() {
  return (
    <Group style={{ padding: 50 }}>
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show default notification
      </Button>

      <Button
        variant="outline"
        color="teal"
        onClick={() =>
          showNotification({
            color: 'teal',
            title: 'You did great',
            message: 'Data was saved',
            icon: <CheckIcon />,
          })
        }
      >
        Show success notification
      </Button>

      <Button
        variant="outline"
        color="red"
        onClick={() =>
          showNotification({
            color: 'red',
            title: 'Bummer!',
            message: 'You have no right to do this',
          })
        }
      >
        Show error notification
      </Button>

      <Button
        variant="outline"
        color="grape"
        onClick={() =>
          showNotification({
            color: 'grape',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>

      <Button
        variant="outline"
        color="indigo"
        onClick={() =>
          showNotification({
            color: 'indigo',
            title: 'Custom autoClose timeout',
            message: 'notification will be closed in 3 seconds',
            autoClose: 3000,
          })
        }
      >
        Will close automatically in 3 seconds
      </Button>
      <Button
        variant="outline"
        color="indigo"
        onClick={() => {
          showNotification({
            id: 'data-loading',
            color: 'indigo',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            updateNotification({
              id: 'data-loading',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              icon: <CheckIcon />,
              autoClose: 3000,
            });
          }, 3000);
        }}
      >
        Update notification
      </Button>
    </Group>
  );
}

storiesOf('Notifications System', module)
  .add('bottom-right (default)', () => (
    <React.StrictMode>
      <CeStyleProvider>
        <NotificationsProvider>
          <NotificationsDemo />
        </NotificationsProvider>
      </CeStyleProvider>
    </React.StrictMode>
  ))
  .add('top-right', () => (
    <CeStyleProvider>
      <NotificationsProvider position="top-right" limit={2}>
        <NotificationsDemo />
      </NotificationsProvider>
    </CeStyleProvider>
  ))
  .add('top-left', () => (
    <CeStyleProvider>
      <NotificationsProvider position="top-left">
        <NotificationsDemo />
      </NotificationsProvider>
    </CeStyleProvider>
  ))
  .add('bottom-left', () => (
    <CeStyleProvider>
      <NotificationsProvider position="bottom-left">
        <NotificationsDemo />
      </NotificationsProvider>
    </CeStyleProvider>
  ))
  .add('bottom-center', () => (
    <CeStyleProvider>
      <NotificationsProvider position="bottom-center">
        <NotificationsDemo />
      </NotificationsProvider>
    </CeStyleProvider>
  ))
  .add('top-center', () => (
    <CeStyleProvider>
      <NotificationsProvider position="top-center">
        <NotificationsDemo />
      </NotificationsProvider>
    </CeStyleProvider>
  ));
