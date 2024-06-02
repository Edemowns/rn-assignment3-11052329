import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text, Image, TextInput } from 'react-native';
import TaskList from './components/TaskList';

const categories = ['Exercise', 'Study', 'Code', 'Cook', 'Read', 'Travel', 'Meditate', 'Sleep'];
const tasks = [
  { id: '1', task: 'Run 5 miles', category: 'Exercise' },
  { id: '2', task: 'Finish reading book', category: 'Read' },
  { id: '3', task: 'Complete React Native project', category: 'Code' },
  { id: '4', task: 'Prepare dinner', category: 'Cook' },
  { id: '5', task: 'Study algorithms', category: 'Study' },
  { id: '6', task: 'Book flights', category: 'Travel' },
  { id: '7', task: 'Morning meditation', category: 'Meditate' },
  { id: '8', task: 'Sleep 8 hours', category: 'Sleep' },
  { id: '9', task: 'Gym workout', category: 'Exercise' },
  { id: '10', task: 'JavaScript practice', category: 'Code' },
  { id: '11', task: 'Cook lunch', category: 'Cook' },
  { id: '12', task: 'Read news articles', category: 'Read' },
  { id: '13', task: 'Plan trip itinerary', category: 'Travel' },
  { id: '14', task: 'Evening yoga', category: 'Meditate' },
  { id: '15', task: 'Revise lecture notes', category: 'Study' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hello, Devs</Text>
          <Image
            source={require('./assets/person.png')}
            style={styles.headerImage}
          />
        </View>
        <Text style={styles.taskCountText}>14 tasks today</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
            />
          </View>
          <Image
            source={require('./assets/Filter.png')}
            style={styles.filterIcon}
          />
        </View>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Text style={styles.category}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={styles.categoryList}
        />
        <TaskList tasks={tasks} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCountText: {
    fontSize: 18,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  categoryList: {
    marginVertical: 20,
  },
  category: {
    marginHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
});

export default App;
