import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {CompletedTaskItemProps} from '../types/CompletedTaskItemProps';

const CompletedTaskItem: React.FC<CompletedTaskItemProps> = ({
  id,
  title,
  onView,
  onDelete,
}) => {
  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            onDelete(id);
          },
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.buttonRow}>
        <Pressable onPress={() => onView(id)} style={styles.viewButton}>
          <Text style={styles.buttonText}>View</Text>
        </Pressable>
        <TouchableOpacity onPress={handleDelete}>
          <Image
            source={require('../../assets/icons/trash.png')}
            style={{width: 31, height: 24}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompletedTaskItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 18,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E9F8FF',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
  },
  viewButton: {
    backgroundColor: '#7165F9',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 6,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
