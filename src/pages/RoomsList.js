import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import RoomCard from '../components/RoomCard';
import AudioHeader from '../components/AudioHeader';

export default function RoomsList({ navigation }) {
  const soundFinished = useSelector(state => state.soundFinished);

  return (
    <View style={styles.container}>
      {!soundFinished && <AudioHeader />}
      {!soundFinished && <View style={{ height: 30 }} />}
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
