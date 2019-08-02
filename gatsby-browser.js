/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/layout';
import { SingleModalProvider } from './src/contexts/SingleModalContext';

const wrapRootElement = ({ element }) => <SingleModalProvider>{element}</SingleModalProvider>;

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { wrapRootElement, wrapPageElement };
