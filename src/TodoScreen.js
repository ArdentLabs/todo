import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TodoScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Todo',
    tabBarIcon: ({ tintColor }) => <Icon name='list-ol' size={18} color={tintColor} />,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Get stuff done!
        </Text>
        <Text style={styles.instructions}>
          To get started, add a todo.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default TodoScreen;
