import { MenuProvider } from 'react-native-popup-menu';

import { HomeScreen } from '@/src/screens/index';

export default function Index() {
  return (
    <MenuProvider>
      <HomeScreen />
    </MenuProvider>
  );
}
