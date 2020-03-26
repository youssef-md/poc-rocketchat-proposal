import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AudioMessage() {
  const dispatch = useDispatch();

  const soundObject = useSelector(state => state.soundObject);
  const isPlaying = useSelector(state => state.isPlaying);
  const soundDuration = useSelector(state => state.soundDuration);
  const soundPosition = useSelector(state => state.soundPosition);

  function createSound() {
    dispatch(async dispatch => {
      const { sound } = await Audio.Sound.createAsync(
        {
          uri:
            'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
        },
        { shouldPlay: true }
        // onSoundStatusUpdate
      );

      alert(res.sound);
      dispatch({ type: 'CREATE_AUDIO_SUCCESS', audio: sound });
    });
  }

  function onSoundStatusUpdate(status) {
    if (status.isLoaded) {
      setSoundPosition(status.positionMillis);
      setSoundDuration(status.durationMillis);
    }
  }

  async function play() {
    if (!soundObject) createSound();
    else soundObject.playAsync();

    setIsPlaying(true);
  }

  async function pause() {
    if (soundObject) {
      soundObject.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stop() {
    if (soundObject) {
      soundObject.stopAsync();
      setIsPlaying(false);
    }
  }

  function getSliderPosition() {
    return 0;
    // const sliderDuration = soundPosition / soundDuration;
    // if (sliderDuration === 1) {
    //   stop();
    //   return 0;
    // }
    // if (soundObject && soundDuration && soundPosition) return sliderDuration;
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
          name={isPlaying ? 'pause' : 'play-arrow'}
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
