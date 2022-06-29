/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Container, Group } from '@cestyle/core';
import { StarFilledIcon, TwitterLogoIcon } from '@modulz/radix-icons';
import GatsbyLink from '../components/MdxPage/MdxProvider/GatsbyLink/GatsbyLink';
import Head from '../components/Head/Head';
import { components } from '../components/MdxPage/MdxProvider/MdxProvider';

export default function PageNotFound() {
  const { li: Li, ul: Ul, h1: H1, a: A, p: P } = components;

  return (
    <>
      <Head title="404" disableTitleTemplate />
      <Container size={1100}>
        <P>
          <H1>Congratulations!</H1>
          You've found a completely secret place on CeStyle website. Unfortunately, this is only a
          404 page. If you've landed on this page from a link on the CeStyle website, please{' '}
          <A href="https://github.com/cestyledev/cestyle/issues/new">create an issue</A>. Otherwise,
          here are some learning materials that will help you get started with CeStyle:
        </P>
        <Ul>
          <Li>
            <GatsbyLink to="/pages/contributing/">CeStyle contributions guideline</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/theming/ssr/">
              Learn how to setup server side rendering with CeStyle
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/others/notifications/">CeStyle notifications system</GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/theming/cestyle-provider/">
              Learn how to customize CeStyle theme
            </GatsbyLink>
          </Li>
          <Li>
            <GatsbyLink to="/hooks/use-merged-ref/">
              Learn how to merge react refs into single one
            </GatsbyLink>
          </Li>
        </Ul>
        <P>
          And since you are here, what about following CeStyle on Twitter and a star on GitHub 😉?
        </P>

        <Group>
          <Button
            component="a"
            href="https://github.com/cestyledev/cestyle"
            leftIcon={<StarFilledIcon />}
            color="gray"
            variant="outline"
          >
            Star cestyle on GitHub
          </Button>
          <Button
            component="a"
            href="https://twitter.com/cestyledev"
            leftIcon={<TwitterLogoIcon />}
            color="blue"
            variant="outline"
          >
            Follow CeStyle on Twitter
          </Button>
        </Group>
      </Container>
    </>
  );
}
