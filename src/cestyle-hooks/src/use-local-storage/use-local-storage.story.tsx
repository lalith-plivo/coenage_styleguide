import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: 'Hooks/use-local-storage',
};

export function Usage() {
  const [value, setValue] = useLocalStorage<string>({
    key: '@cestyle/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export function SerializeJson() {
  const [value, setValue] = useLocalStorage<{ cestyle: string }>({
    key: '@cestyle/localStorage/val',
    defaultValue: { cestyle: 'is awesome' },
  });

  const [value2, setValue2] = useLocalStorage<{ cestyle: string }>({
    key: '@cestyle/localStorage/val',
    defaultValue: { cestyle: 'is awesome' },
  });

  const [value3, setValue3] = useLocalStorage<{ cestyle: string }>({
    key: '@cestyle/localStorage/another-value',
    defaultValue: { cestyle: 'is awesome' },
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        value={value.cestyle}
        onChange={(event) => setValue({ cestyle: event.target.value })}
      />
      <input
        value={value2.cestyle}
        onChange={(event) => setValue2({ cestyle: event.target.value })}
      />
      <input
        value={value3.cestyle}
        onChange={(event) => setValue3({ cestyle: event.target.value })}
      />
    </div>
  );
}

export function SerializeBoolean() {
  const [value, setValue] = useLocalStorage<boolean>({
    key: '@cestyle/localStorage/val',
    defaultValue: true,
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => {
          setValue(event.currentTarget.checked);
        }}
      />
    </div>
  );
}

export function MultipleHooks() {
  const [value, setValue] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  const [value2] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <input value={value2} readOnly />
    </div>
  );
}
