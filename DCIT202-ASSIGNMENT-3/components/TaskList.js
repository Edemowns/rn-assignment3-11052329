import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <View style={styles.iconWrapper}>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.icon} />
          </View>
          <Text style={styles.task}>{item.task}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15, // Make icon circular
  },
  task: {
    flex: 1,
    fontSize: 16,
  },
  category: {
    fontSize: 14,
    color: '#888',
  },
});

export default TaskList;
