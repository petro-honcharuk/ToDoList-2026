import { HomeScreen } from '@/src/screens/index';
import { ThemeProvider } from '@/src/theme/ThemeContext';

export default function Index() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}
