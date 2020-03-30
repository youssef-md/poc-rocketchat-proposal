import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';

const { width } = Dimensions.get('screen');

export default function AudioRecorder() {
  const dispatch = useDispatch();

  const [isRecording, setIsRecording] = useState(false);
  let [audioRecording, setAudioRecording] = useState(null);

  console.log(audioRecording);

  async function onRecordHandler() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });

    const recording = new Audio.Recording();

    console.log('start record');

    const { granted } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (!granted) alert('Not granted to record!');

    try {
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
      );
      await recording.startAsync();
      setAudioRecording(recording);
      setIsRecording(true);
      console.log('terminei de gravar');
    } catch (error) {
      alert(error);
    }
  }

  async function onStopRecording() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });

    console.log('stop record');

    setIsRecording(false);
    await audioRecording.stopAndUnloadAsync();

    dispatch({
      type: 'SET_RECORDED_OBJECT',
      payload: { recordedObject: audioRecording },
    });

    // await Audio.setAudioModeAsync({ })
    // const {} = await recording.createNewLoadedSoundAsync({
    //   shouldCorrectPitch: shouldCorrectPitch,
    // });
  }

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
      <TouchableOpacity
        onPress={isRecording ? onStopRecording : onRecordHandler}
        style={[styles.mic, isRecording && { backgroundColor: 'red' }]}
      >
        <Icon
          name={isRecording ? 'close' : 'mic'}
          size={25}
          color={isRecording ? '#fff' : '#1279ff'}
        />
      </TouchableOpacity>
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
    // backgroundColor: 'red',
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 10,
    // borderRadius: 100,
  },
});
