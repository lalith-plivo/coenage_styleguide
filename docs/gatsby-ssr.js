/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@cestyle/ssr';

const stylesServer = createStylesServer();

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} key="cestyle-styles" />]);
  replaceBodyHTMLString(html);
};
