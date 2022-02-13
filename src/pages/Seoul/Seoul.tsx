import Weather from '@components/Weather';
import { Box } from 'native-base';
import React from 'react';

const Seoul: React.FC = () => (
  <Box>
    <Weather city="Seoul" />
  </Box>
);

export default Seoul;
