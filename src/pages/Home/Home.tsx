import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CitiesStackParams } from '@routers/Cities';
import { Box, Button, Text } from 'native-base';
import React, { useCallback } from 'react';

type HomeProps = NativeStackScreenProps<CitiesStackParams, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const goSeoul = useCallback(() => {
    navigation.navigate('Seoul');
  }, [navigation]);

  const goLondon = useCallback(() => {
    navigation.navigate('London');
  }, [navigation]);

  const goMountainView = useCallback(() => {
    navigation.navigate('MountainView');
  }, [navigation]);

  return (
    <Box flex="1" alignItems="center" justifyContent="center" safeArea>
      <Text>Home</Text>
      <Button my={2} onPress={goSeoul}>
        Seoul
      </Button>
      <Button my={2} onPress={goLondon}>
        London
      </Button>
      <Button my={2} onPress={goMountainView}>
        MountainView
      </Button>
    </Box>
  );
};
export default Home;
