import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {useTaskContext} from '../context/TaskContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

// Inside your component

export default function ViewTask() {
  const route = useRoute<RouteProp<RootStackParamList, 'ViewTask'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {id} = route.params;

  const {tasks, toggleTask, deleteTask} = useTaskContext();

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Task not found</Text>
      </View>
    );
  }

  const handleEdit = () => {
    if (id) {
      navigation.navigate('EditTask', {id});
    } else {
      console.warn('No task ID found');
    }
  };

  const handleComplete = () => {
    toggleTask(id);
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            deleteTask(id);
            navigation.goBack();
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image
          source={require('../../assets/icons/BackButton.png')} // Replace with your back icon path
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>
          {task.description || 'No description available.'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleEdit}
          style={[
            styles.buttonWrapper,
            styles.button,
            {backgroundColor: '#8687E7'},
          ]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleComplete}
          style={[
            styles.buttonWrapper,
            styles.button,
            {backgroundColor: '#5CA87E'},
          ]}>
          <Text style={styles.buttonText}>
            {task.completed ? 'Incomplete' : 'Complete'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDelete}
          style={[
            styles.buttonWrapper,
            styles.button,
            {backgroundColor: '#DC7275'},
          ]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#BFECFF',
    flex: 1,
  },
  taskContainer: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 32,
  },
  buttonWrapper: {
    marginTop: 100,
    marginBottom: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '30%',
    paddingVertical: 16,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});
