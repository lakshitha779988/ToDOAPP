import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {useTaskContext} from '../context/TaskContext';

type EditTaskRouteProp = RouteProp<RootStackParamList, 'EditTask'>;

export default function EditTaskScreen() {
  const {params} = useRoute<EditTaskRouteProp>();
  const navigation = useNavigation();
  const {tasks, editTask} = useTaskContext();

  const task = tasks.find(t => t.id === params.id);

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Task title is required.');
      return;
    }

    editTask(params.id, title, description);
    navigation.goBack();
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Task not found</Text>
      </View>
    );
  }

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

      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          style={styles.input}
        />

        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          multiline
          style={[styles.input, styles.textArea]}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#BFECFF',
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 10,
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 14,
    fontSize: 16,
    marginBottom: 40,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
  saveButton: {
    position: 'absolute',
    top: 400,
    right: 20,
    backgroundColor: '#60B985',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Latto',
  },
});
