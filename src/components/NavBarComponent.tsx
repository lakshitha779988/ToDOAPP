import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

export default function NavBarComponent() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const goToAddTask = () => {
    navigation.navigate('AddTask');
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const goToCompletedTask = () => {
    navigation.navigate('CompletedTask');
  };

  const goToPendingTask = () => {
    navigation.navigate('PendingTask');
  };
  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.navBarContainer}>
      <View style={styles.navIconContainer}>
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require('../../assets/icons/home-2.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.navIconText}>Home</Text>
      </View>
      <View style={[styles.navIconContainer, styles.completedIcon]}>
        <TouchableOpacity onPress={goToCompletedTask}>
          <Image
            source={require('../../assets/icons/calendar.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.navIconText}>Completed</Text>
      </View>
      <View style={styles.addIconContainer}>
        <TouchableOpacity onPress={goToAddTask}>
          <Image
            source={require('../../assets/icons/AddIcon.png')}
            style={{width: 67, height: 64}}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.navIconContainer, styles.pedingIcon]}>
        <TouchableOpacity onPress={goToPendingTask}>
          <Image
            source={require('../../assets/icons/clock.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.navIconText}>Pending</Text>
      </View>
      <View style={styles.navIconContainer}>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            source={require('../../assets/icons/user.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.navIconText}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#363636',
    paddingLeft: 20,
    paddingRight: 20,
  },
  navIconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  navIconText: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  addIconContainer: {
    position: 'absolute',
    top: -30,
  },
  pedingIcon: {
    marginLeft: 40,
  },
  completedIcon: {
    marginRight: 40,
  },
});
