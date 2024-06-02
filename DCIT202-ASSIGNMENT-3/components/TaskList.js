import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item.task}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 35,
    borderRadius: 8,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily:'lato',
  },
});

export default TaskList;
