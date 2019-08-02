/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { SingleModalProvider } from './src/contexts/SingleModalContext';

const wrapRootElement = ({ element }) => <SingleModalProvider>{element}</SingleModalProvider>;

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="single-modal" id="single-modal" />]);
};

export { wrapRootElement, onRenderBody };
