
import { Groups } from './screens/Groups';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from './components/Loading';
import { StatusBar } from 'react-native';
import { NewGroup } from './screens/NewGroup';
import { Players } from './screens/Players';
import { Routes } from './routes';

export default function HomeScreen() {
  const [isFontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {
        isFontLoaded ?
          <Routes />
          :
          <Loading />
      }
    </ThemeProvider>
  );
}


