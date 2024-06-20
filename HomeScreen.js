import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    {
      title: 'Städa',
      description: 'Städa Lägenhet',
      date: '1/2/2023',
      id: 0,
      done: true,
    },
    {
      title: 'Diska',
      description: 'Diska',
      date: '1/2/2023',
      id: 1,
      done: false,
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            title='Add'
            onPress={() =>
              navigation.navigate('Add', {
                addTodo: addTodo,
              })
            }
          />
        );
      },
    });
  }, []);

  function addTodo(title, description, date) {
    console.log(title);
    setTodos((old) => [
      ...old,
      { title, description, date, id: old.length, done: false },
    ]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      if (todo.id != id) {
        return todo;
      }
    });

    setTodos(newTodos);
  }

  function toggleDone(id) {
    const newTodos = todos.filter((todo) => {
      if (todo.id == id) {
        console.log('SDSDS');
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    });
    console.log(newTodos);
    setTodos(newTodos);
  }

  function Todo({ todo, navigation }) {
    return (
      <View>
        <TouchableOpacity
          style={[styles.todo, todo.item.done && styles.done]}
          onPress={() =>
            navigation.navigate('Details', {
              todo: todo.item,
              deleteTodo: deleteTodo,
              toggleDone: toggleDone,
            })
          }
        >
          <Text style={todo.item.done && styles.textDone}>
            {todo.item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={(item) => <Todo todo={item} navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  todo: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  done: {
    backgroundColor: 'lightgreen',
  },
  textDone: {
    textDecorationLine: 'line-through',
  },
});
