import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import { ThemeProvider } from '@/src/theme/ThemeContext';

import { FONTS } from '../src/constants/fonts';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Kanit-Regular': FONTS.REGULAR,
    'Kanit-Bold': FONTS.BOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
