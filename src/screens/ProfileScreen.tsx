import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import NavBarComponent from '../components/NavBarComponent';
import {useTaskContext} from '../context/TaskContext';

export default function ProfileScreen() {
  const {tasks} = useTaskContext();

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.filter(task => !task.completed).length;
  const totalCount = tasks.length;

  const progress = totalCount > 0 ? completedCount / totalCount : 0;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <Text style={styles.title}>Profile</Text>

      {/* Profile Image Placeholder */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/profileImage.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Stats Boxes */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statCount}>{completedCount}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statCount}>{pendingCount}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {completedCount}/{totalCount} tasks completed
        </Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, {width: `${progress * 100}%`}]}
          />
        </View>
      </View>

      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#7165F9',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  statBox: {
    backgroundColor: '#E0ECFF',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  statCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4C6EF5',
  },
  statLabel: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  progressContainer: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 14,
    width: '100%',
    backgroundColor: '#D0D0D0',
    borderRadius: 7,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4C6EF5',
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
