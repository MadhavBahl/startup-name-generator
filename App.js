import  { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/HomeScreen';

const navigator = createStackNavigator ({
	Home: HomeScreen
}, {
	initialRouteName: 'Home',
	defaultNavigationOptions: {
		header: null
	}
});

export default createAppContainer(navigator);