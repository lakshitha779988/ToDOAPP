import {StyleSheet, Text, View, Pressable, Switch} from 'react-native';
import React from 'react';

interface TaskComponentProps {
  id: string;
  title: string;
  completed: boolean;
  onView: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TaskComponent({
  id,
  title,
  completed,
  onView,
  onToggle,
}: TaskComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, completed && styles.completedText]}>
          {title}
        </Text>
      </View>
      <Pressable onPress={() => onView(id)} style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View</Text>
      </Pressable>
      <Switch
        value={completed}
        onValueChange={() => onToggle(id)}
        style={styles.switch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    paddingVertical: 36,
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  switch: {
    marginHorizontal: 8,
  },
  viewButton: {
    backgroundColor: '#8687E7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
