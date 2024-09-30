import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from '../components/IconButton';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreens';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={(props) => ({
        headerRight: () => <IconButton {...props} />,
      })}
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
    </RootStack.Navigator>
  );
}
