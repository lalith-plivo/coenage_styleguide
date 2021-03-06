import React from 'react';
import { Container, Group, Text } from '@cestyle/core';
import { Logo } from '../Logo/Logo';
import { FOOTER_LINKS_DATA } from './data';
import useStyles from './Footer.styles';
import { LinksGroup } from './LinksGroup/LinksGroup';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const { classes, cx } = useStyles();
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} size="sm">
                Build fully functional accessible web applications faster than ever
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by <a href="https://www.plivo.com/about/">Team Coengage</a>
              </Text>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
