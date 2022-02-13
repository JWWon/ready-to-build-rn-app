import Weather from '@components/Weather';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CitiesStackParams } from '@routers/Cities';
import { Box, Button, Input, Text } from 'native-base';
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const searchSchema = yup.object({
  city: yup.string().required(),
});

type HomeProps = NativeStackScreenProps<CitiesStackParams, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ city: string }>({
    resolver: yupResolver(searchSchema),
  });
  const [city, setCity] = useState<string>();

  const goSeoul = useCallback(() => {
    navigation.navigate('Seoul');
  }, [navigation]);

  const goLondon = useCallback(() => {
    navigation.navigate('London');
  }, [navigation]);

  const goMountainView = useCallback(() => {
    navigation.navigate('MountainView');
  }, [navigation]);

  const onSubmit: SubmitHandler<{ city: string }> = useCallback(({ city: value }) => setCity(value), []);

  return (
    <Box flex="1" alignItems="center" justifyContent="center" safeArea>
      <Text>Search the weather of the city</Text>
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Box flexDir="row" alignItems="center" mt="2">
              <Input onBlur={onBlur} w="3/4" maxW="300px" onChangeText={onChange} value={value} />
              <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleSubmit(onSubmit)}>
                Search
              </Button>
            </Box>
            {errors.city && <Text color="error.400">{errors.city.message}</Text>}
          </>
        )}
      />
      {city && <Weather city={city} />}
      <Text fontSize="lg" mt="4">
        Shortcuts
      </Text>
      <Box flexDir="row" mt="2">
        <Button mx={2} onPress={goSeoul}>
          Seoul
        </Button>
        <Button mx={2} onPress={goLondon}>
          London
        </Button>
        <Button mx={2} onPress={goMountainView}>
          MountainView
        </Button>
      </Box>
    </Box>
  );
};
export default Home;
