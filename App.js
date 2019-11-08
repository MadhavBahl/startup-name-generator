import  { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/HomeScreen';

const navigator = createStackNavigator ({
	Home: HomeScreen
}, {
	initialRouteName: 'Home',
	defaultNavigationOptions: {
		title: 'Startup Name Generator',
		headerStyle: {
			backgroundColor: '#4990e2',
		},
		headerTintColor: '#fff',
	}
});

export default createAppContainer(navigator);