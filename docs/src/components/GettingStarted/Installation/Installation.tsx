import React, { useState, useEffect } from 'react';
import { Title, SimpleGrid, useCeStyleTheme } from '@cestyle/core';
import { PACKAGES_DATA } from './data';
import { CheckboxCard } from './CheckboxCard';

interface InstallationProps {
  setDependencies(dependencies: string): void;
}

export function Installation({ setDependencies }: InstallationProps) {
  const theme = useCeStyleTheme();

  const [values, setValues] = useState({
    '@cestyle/hooks': true,
    '@cestyle/core': true,
    '@cestyle/dates': false,
    '@cestyle/notifications': false,
    '@cestyle/prism': false,
    '@cestyle/rte': false,
    '@cestyle/dropzone': false,
  });

  const items = PACKAGES_DATA.map((item) => (
    <CheckboxCard
      key={item.package}
      checked={values[item.package]}
      title={item.package}
      description={item.description}
      onChange={() => setValues((c) => ({ ...c, [item.package]: !c[item.package] }))}
      style={{ minHeight: 90 }}
    />
  ));

  const dependencies = Array.from(
    new Set(
      PACKAGES_DATA.reduce((acc, item) => {
        if (values[item.package]) {
          acc.push(...item.dependencies);
        }

        return acc;
      }, [])
    )
  )
    .sort()
    .reverse();

  useEffect(() => {
    setDependencies(dependencies.join(' '));
  }, [dependencies]);

  return (
    <div style={{ marginBottom: 50 }}>
      <Title
        order={2}
        mb="lg"
        sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
      >
        Choose packages
      </Title>

      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
        {items}
      </SimpleGrid>
    </div>
  );
}
