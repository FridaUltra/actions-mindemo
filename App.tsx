import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigators/RootStacknavigator';

export default function App() {
	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
}
