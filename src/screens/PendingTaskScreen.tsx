import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBarComponent from '../components/NavBarComponent';
import { useTaskContext } from '../context/TaskContext';
import CompletedTaskItem from '../components/CompletedTaskItem'; // ✅ Reusing this
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export default function PendingTaskScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { tasks, deleteTask } = useTaskContext();

  const pendingTasks = tasks.filter(task => !task.completed);

  const handleView = (id: string) => {
    navigation.navigate('ViewTask', { id });
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
  };

  return (
    <SafeAreaView style={[{ flex: 1 },styles.container]}>
       {pendingTasks.length != 0 ? (
     <Text style={styles.noTaskText}>
     Pending{'\n'}
                     <Text style={styles.availableText}>Tasks</Text>
                   </Text>

       ) : null}
      {pendingTasks.length === 0 ? 
      (<View style={styles.taskContainer}>
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
        <ScrollView style={{ flex: 1, marginBottom: 70,marginTop: 20 }}>
        {pendingTasks.map(task => (
          <CompletedTaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            onView={handleView}
            onDelete={handleDelete}
          />
        ))}
        </ScrollView>
      )
      }
      

      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex:1,
    paddingTop: 90,
    paddingBottom: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#BFECFF',
  },
  container:{
    backgroundColor: '#BFECFF',
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  noTaskText: {
    fontSize: 44,
    fontWeight: '900',
    color: '#7165F9',
    textAlign: 'center',
    lineHeight: 60,
    marginTop: 10,
  },
  availableText: {
    fontWeight: '900',
  },
});
