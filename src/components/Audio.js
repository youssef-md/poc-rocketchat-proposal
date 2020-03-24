import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AudioMessage({ isPlaying, pause, play }) {
  return (
    <View style={styles.audio}>
      <TouchableOpacity
        style={[styles.button]}
        onPress={isPlaying ? pause : play}
      >
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          size={25}
          color="#eee"
        />
      </TouchableOpacity>
      <View style={styles.duration}>
        <View style={styles.durationCircle} />
      </View>
      <Text style={styles.text}>08:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  audio: {
    width: 300,
    padding: 12,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1279ff'
  },
  duration: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: 160,
    height: 1
  },
  durationCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1279ff',
    position: 'absolute',
    top: -6,
    left: 0
  },
  text: {
    color: '#999',
    fontSize: 13
  }
});
