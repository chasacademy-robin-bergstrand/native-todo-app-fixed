import { useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { todo, deleteTodo, toggleDone } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: todo.title,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>{todo.description} </Text>
        </View>
        <Button
          title={todo.done ? 'undone' : 'done'}
          onPress={() => {
            toggleDone(todo.id);
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.bottomMenu}>
        <Text>{todo.date}</Text>
        <Button
          title='Delete'
          onPress={() => {
            deleteTodo(todo.id);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  todoContainer: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  descriptionView: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 25,
  },
  bottomMenu: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});
