import React from 'react';
import { Section } from '../Section/Section';
import { RichTextDemo } from './RichTextDemo';

export function RichText() {
  return (
    <Section
      title="Rich text editor"
      description="A Quill.js based rich text editor: handles images uploads, supports embedded video, integrates seamlessly with your CeStyle theme"
      link="/others/rte/"
      label="Get started with @cestyle/rte"
    >
      <RichTextDemo />
    </Section>
  );
}
