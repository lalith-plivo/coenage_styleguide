import React from 'react';
import { Link } from 'gatsby';
import { Button, Group } from '@cestyle/core';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Demo, CreateStylesDemos } from '@cestyle/demos';
import { PageSection } from '../PageSection/PageSection';

export function Emotion() {
  return (
    <PageSection
      title="Based on emotion 👩‍🎤"
      description="CeStyle is based on emotion, take advantage of core emotion features with createStyles function: auto vendor-prefixing, critical css extraction during server side rendering, lazy evaluation, dynamic theming, type safe styles with TypeScript and more."
    >
      <div style={{ marginTop: 30 }}>
        <Demo data={CreateStylesDemos.createStylesBasics} />
      </div>

      <Group position="center">
        <Button
          size="md"
          component={Link}
          to="/theming/create-styles/"
          rightIcon={<ArrowRightIcon style={{ width: 16, height: 16 }} />}
        >
          Explore all createStyle features
        </Button>
      </Group>
    </PageSection>
  );
}
