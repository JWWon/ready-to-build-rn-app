import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Provider from '@utils/Provider';
import Weather from './Weather';

test('weather in seoul shows up well', async () => {
  const rendered = render(
    <Provider testEnv>
      <Weather city="Seoul" />
    </Provider>
  );

  await waitFor(() => rendered.getByTestId('weather'), { timeout: 3000 });
});
