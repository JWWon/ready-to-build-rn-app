import { Box } from 'native-base';
import React from 'react';
import Weather from '@components/Weather';

const London: React.FC = () => (
  <Box>
    <Weather city="London" />
  </Box>
);

export default London;
