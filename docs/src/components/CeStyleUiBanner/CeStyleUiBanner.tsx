import React from 'react';
import { Title, Overlay, Text, Button, Group } from '@cestyle/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './CeStyleUiBanner.styles';

interface CeStyleUiBannerProps extends React.ComponentPropsWithoutRef<'div'> { }

export function CeStyleUiBanner({ className, ...others }: CeStyleUiBannerProps) {
  const { classes, cx, theme } = useStyles();
  return (
    <div className={cx(classes.root, className)} {...others}>
      <Overlay
        gradient={`linear-gradient(45deg, ${theme.colorScheme === 'dark' ? theme.colors.neutral[2] : theme.colors.neutral[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
        opacity={0.5}
        zIndex={0}
        radius="md"
      />
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Explore <span className={classes.highlight}>CoengageStyle UI</span>
        </Title>

        <Text size="sm" sx={{ lineHeight: 1.7 }}>
          CoengageStyle UI is a set of more than 120 responsive components built for Team Coengage.
        </Text>
        <Group mt="xl">
          <Button component="a" href="https://ui.cestyle.dev/">
            View components
          </Button>
          <Button
            className={classes.secondaryControl}
            component="a"
            href="https://github.com/cestyledev/ui.cestyle.dev"
            variant="default"
            leftIcon={<MarkGithubIcon size={14} />}
          >
            Source code
          </Button>
        </Group>
      </div>
    </div>
  );
}
