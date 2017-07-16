import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import TodoScreen from './TodoScreen';

const App = TabNavigator({
  Main: { screen: HomeScreen },
  Todo: { screen: TodoScreen },
});

export default App;
