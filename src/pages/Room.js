import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import AudioMessage from '../components/Audio';
import AudioHeader from '../components/AudioHeader';
import AudioRecorder from '../components/AudioRecorder';

export default function Room() {
  const soundFinished = useSelector(state => state.soundFinished);
  const recordedObject = useSelector(state => state.recordedObject);

  return (
    <View style={styles.container}>
      {!soundFinished && <AudioHeader />}
      {recordedObject && <AudioMessage />}
      <AudioRecorder />
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
