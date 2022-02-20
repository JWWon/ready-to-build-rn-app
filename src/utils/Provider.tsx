import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const Provider: React.FC<{ testEnv?: boolean }> = ({ children, testEnv = false }) => (
  <QueryClientProvider client={queryClient}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <NativeBaseProvider {...(testEnv ? { initialWindowMetrics: inset } : {})}>{children}</NativeBaseProvider>
  </QueryClientProvider>
);

export default Provider;
