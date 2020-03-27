import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon
          name="sentiment-satisfied"
          size={25}
          color="#1279ff"
          style={{ marginRight: 25 }}
        />
        <Text>Recorder</Text>
      </View>
      <Icon
        name="attach-file"
        size={25}
        color="#1279ff"
        style={{ marginRight: 70 }}
      />
      <TouchableWithoutFeedback
        onLongPress={() => setIsRecording(true)}
        onPressOut={() => setIsRecording(false)}
        style={styles.micButton}
      >
        <View style={[styles.mic, isRecording && styles.micRecording]}>
          <Icon name="mic" size={25} color={isRecording ? '#fff' : '#1279ff'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mic: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 10,
  },
  micRecording: {
    backgroundColor: '#1279ff',
  },
});
