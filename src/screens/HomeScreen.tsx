import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import NavBarComponent from '../components/NavBarComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTaskContext } from '../context/TaskContext';
import TaskComponent from '../components/TaskComponent';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { tasks, toggleTask } = useTaskContext();

  const handleView = (id: string) => {
    navigation.navigate('ViewTask', { id });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {tasks.length === 0 ? (
        <View style={styles.taskContainer}>
          <Text style={styles.noTaskText}>
            NO TASK{'\n'}
            <Text style={styles.availableText}>AVAILABLE</Text>
          </Text>
          <Image
            source={require('../../assets/NoTask.png')}
            style={{ width: 213, height: 298 }}
          />
        </View>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: '#BFECFF' }}>
          <View style={styles.taskListContainer}>

         
          <View>
          <Text style ={styles.hearderTesxt}>TASKS</Text>
          </View>
          <View>
          {tasks.map((task) => (
            <TaskComponent
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onView={handleView}
              onToggle={toggleTask}
            />
          ))}
          </View>
          </View>
        </ScrollView>
      )}

      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  taskContainer: {
    flex:1,
    paddingTop: 90,
    paddingBottom: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#BFECFF',
  },
  noTaskText: {
    fontSize: 44,
    fontWeight: '900',
    color: '#7165F9',
    textAlign: 'center',
    lineHeight: 60,
  },
  availableText: {
    fontWeight: '900',
  },

  hearderTesxt:{
    fontSize: 42,
    fontWeight: 'bold',
    color: '#7165F9',
    textAlign: 'center',
    marginBottom: 20,
  },
  taskListContainer: {
    flex:1,
    flexDirection: 'column',
    gap: 47,
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: '#BFECFF',
  },
});
