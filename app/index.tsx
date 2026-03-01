import { MenuProvider } from 'react-native-popup-menu';

import { HomeScreen } from '@/src/screens/index';
import { ThemeProvider } from '@/src/theme/ThemeContext';

export default function Index() {
  return (
    <MenuProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </MenuProvider>
  );
}
