import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RoomCard from '../components/RoomCard';

export default function RoomsList({ navigation }) {
  return (
    <View style={styles.container}>
      <RoomCard
        onPress={() => navigation.navigate('Room')}
        thumbnail="G"
        title="gsoc2020"
        lastMessage="youssef.muhamad: Hellooo!"
      />
      <RoomCard
        thumbnail="T"
        title="Testing"
        lastMessage="youssef.muhamad: blah blah blah"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
});
