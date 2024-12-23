/* eslint-disable @typescript-eslint/no-require-imports */
import { useFonts } from 'expo-font';

import { SafeAreaView, Text } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-600': require('./assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <Text style={{ fontFamily: 'GeneralSans-400' }}>Hello JStack</Text>
    </SafeAreaView>
  );
}
