import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelocmeScreen from './src/screens/WelocmeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelocmeScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import CompletedTaskScreen from './src/screens/CompletedTaskScreen';
import PendingTaskScreen from './src/screens/PendingTaskScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {TaskProvider} from './src/context/TaskContext';
import ViewTask from './src/screens/ViewTask';
import EditTaskScreen from './src/screens/EditTaskScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddTask: undefined;
  CompletedTask: undefined;
  PendingTask: undefined;
  Profile: undefined;
  ViewTask: {id: string};
  EditTask: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{animation: 'none'}}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CompletedTask"
            component={CompletedTaskScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PendingTask"
            component={PendingTaskScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ViewTask"
            component={ViewTask}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditTask"
            component={EditTaskScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({});
