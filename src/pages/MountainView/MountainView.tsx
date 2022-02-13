import Weather from '@components/Weather';
import { Box } from 'native-base';
import React from 'react';

const MountainView: React.FC = () => (
  <Box>
    <Weather city="MountainView" />
  </Box>
);

export default MountainView;
