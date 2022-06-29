import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { CeStyleProvider, ColorSchemeProvider, Affix, ActionIcon } from '@cestyle/core';
import { useHotkeys } from '@cestyle/hooks';
import { NotificationsProvider } from '@cestyle/notifications';
import rtlPlugin from 'stylis-plugin-rtl';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  const [rtl, setRtl] = useState(false);
  const toggleRtl = () => setRtl((r) => !r);
  useHotkeys([['mod + L', toggleRtl]]);

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <CeStyleProvider
        theme={{
          dir: rtl ? 'rtl' : 'ltr',
          colorScheme: useDarkMode() ? 'dark' : 'light',
          headings: { fontFamily: "'Inter', sans-serif" },
        }}
        emotionOptions={
          rtl ? { key: 'cestyle-rtl', stylisPlugins: [rtlPlugin as any] } : { key: 'cestyle' }
        }
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Affix position={{ right: rtl ? 'unset' : 0, left: rtl ? 0 : 'unset', bottom: 0 }}>
            <ActionIcon
              onClick={toggleRtl}
              variant="default"
              style={{
                borderBottom: 0,
                borderRight: 0,
                borderTopLeftRadius: 4,
                width: 60,
                fontWeight: 700,
              }}
              radius={0}
              size={30}
            >
              {rtl ? 'RTL' : 'LTR'}
            </ActionIcon>
          </Affix>
          <div dir={rtl ? 'rtl' : 'ltr'}>{props.children}</div>
        </NotificationsProvider>
      </CeStyleProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
