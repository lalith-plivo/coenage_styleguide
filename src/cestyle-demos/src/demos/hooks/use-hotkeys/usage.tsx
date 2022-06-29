import React, { useState } from 'react';
import { getHotkeyHandler, useHotkeys } from '@cestyle/hooks';
import { useNotifications } from '@cestyle/notifications';
import { TextInput } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@cestyle/hooks';
import { useNotifications } from '@cestyle/notifications';
import { TextInput } from '@cestyle/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const notifications = useNotifications();

  const handleSubmit = () =>
    notifications.showNotification({ title: 'Your message', message: value });

  const handleSave = () =>
    notifications.showNotification({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;

function Demo() {
  useHotkeys([
    [
      'alt+mod+shift+X',
      () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      },
    ],
  ]);

  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const notifications = useNotifications();

  const handleSubmit = () =>
    notifications.showNotification({ title: 'Your message', message: value });

  const handleSave = () =>
    notifications.showNotification({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}

export const useHotkeysDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};