import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text, Image, TextInput } from 'react-native';
import TaskList from './components/TaskList';

const categories = [
  { id: '1', name: 'Exercise', icon: require('./assets/young woman working online.png') },
  { id: '2', name: 'Study', icon: require('./assets/young woman working at desk.png') },
  { id: '3', name: 'Run' },
  { id: '4', name: 'Fight' },
  { id: '5', name: 'Code' },
  { id: '6', name: 'Cook' },
  { id: '7', name: 'Read' },
  { id: '8', name: 'Travel' },
  { id: '9', name: 'Meditate' },
  { id: '10', name: 'Sleep' },
];

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
          <View style={styles.imageWrapper}>
            <Image source={require('./assets/person.png')} style={styles.headerImage} />
          </View>
        </View>
        <Text style={styles.taskCountText}>14 tasks today</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
        </View>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.imageRow}>
          <View style={styles.imageBox}>
            <Image source={categories[0].icon} style={styles.fullScreenImage} resizeMode="contain" />
          </View>
          <View style={styles.imageBox}>
            <Image source={categories[1].icon} style={styles.fullScreenImage} resizeMode="contain" />
          </View>
        </View>
        <FlatList
          data={categories.slice(2)}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
             
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.categoryListColumn}
          style={styles.categoryList}
        />
        <Text style={styles.workLoad}>Ongoing Tasks</Text>
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
  imageWrapper: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
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
  categoriesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    marginVertical: 20,
  },
  categoryListColumn: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    textAlign: 'center',
  },
  workLoad: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageBox: {
    width: '48%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default App;
