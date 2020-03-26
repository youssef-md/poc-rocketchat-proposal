import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import AudioMessage from '../components/Audio';
import AudioHeader from '../components/AudioHeader';

export default function Room() {
  const soundFinished = useSelector(state => state.soundFinished);

  return (
    <View style={styles.container}>
      {<AudioHeader />}
      <AudioMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
