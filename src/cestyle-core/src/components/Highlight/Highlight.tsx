import React, { forwardRef } from 'react';
import {
  CeStyleColor,
  PolymorphicComponentProps,
  PolymorphicRef,
  CeStyleTheme,
  CSSObject,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import { Text, SharedTextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';
import { highlighter } from './highlighter/highlighter';

interface _HighlightProps extends SharedTextProps {
  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: CeStyleColor;

  /** Styles applied to highlighted part */
  highlightStyles?: CSSObject | ((theme: CeStyleTheme) => CSSObject);

  /** Full string part of which will be highlighted */
  children: string;
}

export type HighlightProps<C> = PolymorphicComponentProps<C, _HighlightProps>;

type HighlightComponent = (<C = 'div'>(props: HighlightProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<HighlightProps<any>> = {
  highlightColor: 'yellow',
};

export const Highlight: HighlightComponent = forwardRef(
  (props: HighlightProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { children, highlight, highlightColor, component, highlightStyles, ...others } =
      useCeStyleDefaultProps('Highlight', defaultProps, props);
    const highlightChunks = highlighter(children, highlight);

    return (
      <Text component={component as any} ref={ref} {...others}>
        {highlightChunks.map(({ chunk, highlighted }, i) =>
          highlighted ? (
            <Mark key={i} color={highlightColor} sx={highlightStyles}>
              {chunk}
            </Mark>
          ) : (
            <span key={i}>{chunk}</span>
          )
        )}
      </Text>
    );
  }
) as any;

Highlight.displayName = '@cestyle/core/Highlight';
