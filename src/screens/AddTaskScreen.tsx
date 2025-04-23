import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import NavBarComponent from '../components/NavBarComponent';
import {useTaskContext} from '../context/TaskContext'
import { useState } from 'react';

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const { addTask } = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;

    addTask(title, description);
    navigation.goBack(); // Go back to task list
  };
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../../assets/icons/BackButton.png')} // Replace with your back icon path
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      {/* Title Input */}
      <TextInput
        placeholder="Title |"
        style={styles.input}
        placeholderTextColor="#000"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description Input */}
      <TextInput
        placeholder="Description |"
        style={[styles.input, styles.descriptionInput]}
        placeholderTextColor="#000"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.undoButton}>
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFECFF',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 10,
    
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
  descriptionInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 10,
    margin:-20,
  },
  undoButton: {
    backgroundColor: '#9A8DFF',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 6,
  },
  addButton: {
    backgroundColor: '#60B985',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Latto',
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
