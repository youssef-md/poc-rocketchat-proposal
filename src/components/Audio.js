import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AudioMessage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [soundObject, setSoundObject] = useState(null);
  const [soundDuration, setSoundDuration] = useState(null);
  const [soundPosition, setSoundPosition] = useState(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: false,
      // shouldDuckAndroid: true, // ?
      // playThroughEarpieceAndroid: false,
    });
  }, []);

  async function createSound() {
    setIsLoading(true);
    const { sound } = await Audio.Sound.createAsync(
      {
        uri:
          'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
      },
      { shouldPlay: true },
      onSoundStatusUpdate
    );
    setSoundObject(sound);
    alert('loaded');
    setIsLoading(false);
  }

  function onSoundStatusUpdate(status) {
    if (status.isLoaded) {
      setSoundPosition(status.positionMillis);
      setSoundDuration(status.durationMillis);
    }
  }

  async function play() {
    // alert('play');
    if (!soundObject) await createSound();
    else soundObject.playAsync();

    setIsPlaying(true);
  }

  async function pause() {
    // alert('pause');
    if (soundObject) soundObject.pauseAsync();
    setIsPlaying(false);
  }

  function getSliderPosition() {
    if (soundObject && soundDuration && soundPosition)
      return soundPosition / soundDuration;
    return 0;
  }

  function onSliderValueChange(value) {
    // When dragging the slider, should pause the audio until the release
    if (soundObject) {
      setIsPlaying(false);
      soundObject.pauseAsync();
    }
  }

  function onSliderSlidingComplete(value) {
    // When releasing the slider, should play the audio in the released duration
    if (soundObject) {
      const seekPosition = value * soundDuration;
      soundObject.setPositionAsync(seekPosition);
      soundObject.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <View style={styles.audio}>
      <TouchableOpacity
        style={[styles.button]}
        onPress={isPlaying ? pause : play}
      >
        <Icon
          name={
            isLoading ? 'hourglass-empty' : isPlaying ? 'pause' : 'play-arrow'
          }
          size={25}
          color="#eee"
        />
      </TouchableOpacity>
      <Slider
        value={getSliderPosition()}
        onValueChange={onSliderValueChange}
        onSlidingComplete={onSliderSlidingComplete}
        style={{ width: 180 }}
        thumbTintColor="#1279ff"
        minimumTrackTintColor="#1279ff"
      />
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
    justifyContent: 'space-between',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1279ff',
  },
  duration: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: 160,
    height: 1,
  },
  durationCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1279ff',
    position: 'absolute',
    top: -6,
    left: 0,
  },
  text: {
    color: '#999',
    fontSize: 13,
  },
});
