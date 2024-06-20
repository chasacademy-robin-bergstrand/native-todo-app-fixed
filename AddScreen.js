import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddScreen(route) {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');

  const { addTodo } = route.route.params;

  useEffect(() => {
    route.navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            title='Done'
            onPress={() => {
              addTodo(title, description, new Date().toLocaleDateString());
              route.navigation.goBack();
            }}
          />
        );
      },
    });
  }, [title, description]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeTitle}
        value={title}
        placeholder='Todo Title'
        style={styles.title}
      />
      <TextInput
        onChangeText={onChangeDescription}
        value={description}
        multiline
        numberOfLines={10}
        placeholder='Todo Description'
        style={styles.description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: 'white',
  },
  description: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: 'white',
  },
});
