import { Box } from '@chakra-ui/react';
import React from 'react';

import type { Props } from './types';

import AppErrorBoundary from 'ui/shared/AppError/AppErrorBoundary';
import HeaderAlert from 'ui/snippets/header/HeaderAlert';
import HeaderMobile from 'ui/snippets/header/HeaderMobile';

import * as Layout from './components';

const LayoutHome = ({ children }: Props) => {
  return (
    <Layout.Container>
      <Box
        position="absolute"
        height={{ base: 164, lg: 512 }}
        width="100%"
        zIndex={ 0 }
        background={{
          base: 'linear-gradient(95.92deg, #08070E 25.38%, #423A74 100%)',
          lg: 'linear-gradient(0deg, rgba(208,139,254,1) 0%, rgba(49,4,194,1) 11%, rgba(6,6,6,1) 57%)',
        }}
      >
      </Box>
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
