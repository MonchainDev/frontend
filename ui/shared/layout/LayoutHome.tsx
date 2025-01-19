import React from 'react';

import type { Props } from './types';

import AppErrorBoundary from 'ui/shared/AppError/AppErrorBoundary';
import HeaderAlert from 'ui/snippets/header/HeaderAlert';
import HeaderMobile from 'ui/snippets/header/HeaderMobile';

import * as Layout from './components';

const LayoutHome = ({ children }: Props) => {
  return (
    <Layout.Container>
      <div style={{
        position: 'absolute',
        height: 512,
        width: '100%',
        background: 'linear-gradient(0deg, rgba(208,139,254,1) 0%, rgba(49,4,194,1) 11%, rgba(6,6,6,1) 57%)',
        zIndex: 0,
      }}>
      </div>
      <Layout.TopRow/>
      <Layout.NavBar/>
      <HeaderMobile hideSearchBar/>
      <Layout.MainArea position="relative">
        <Layout.SideBar/>
        <Layout.MainColumn
          paddingTop={{ base: 3, lg: 6 }}
        >
          <HeaderAlert/>
          <AppErrorBoundary>
            { children }
          </AppErrorBoundary>
        </Layout.MainColumn>
      </Layout.MainArea>
      <Layout.Footer/>
    </Layout.Container>
  );
};

export default LayoutHome;
