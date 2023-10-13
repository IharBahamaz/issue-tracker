import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { Box } from '@radix-ui/themes';

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
