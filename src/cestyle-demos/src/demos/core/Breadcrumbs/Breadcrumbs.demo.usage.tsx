import React from 'react';
import { useCeStyleTheme, Breadcrumbs, Anchor } from '@cestyle/core';

const code = `
import { Breadcrumbs, Anchor } from '@cestyle/core';

const items = [
  { title: 'CeStyle', href: '#' },
  { title: 'CeStyle hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'CeStyle', href: 'https://cestyle.dev' },
  { title: 'CeStyle hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} style={{ marginTop: 10 }}>
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
