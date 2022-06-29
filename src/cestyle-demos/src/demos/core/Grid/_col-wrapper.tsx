import React from 'react';
import { Col, ColProps, Text, useCeStyleTheme, Box } from '@cestyle/core';

export function ColWrapper(props: ColProps) {
  const theme = useCeStyleTheme();
  return (
    <Col {...props}>
      <Box
        sx={{
          minHeight: props.style?.minHeight ? props.style.minHeight : null,
          height: '100%',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0],
          padding: theme.spacing.md,
        }}
      >
        <Text
          color={theme.colorScheme === 'dark' ? 'gray' : 'blue'}
          size="xl"
          weight="bold"
          align="center"
        >
          {props.children}
        </Text>
      </Box>
    </Col>
  );
}
