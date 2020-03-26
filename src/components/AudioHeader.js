import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function AudioHeader() {
  const dispatch = useDispatch();

  const isPlaying = useSelector(state => state.isPlaying);
  const soundRate = useSelector(state => state.soundRate);

  function play() {
    dispatch({ type: 'PLAY_AUDIO_REQUEST' });
  }

  function pause() {
    dispatch({ type: 'PAUSE_AUDIO_REQUEST' });
  }

  function stop() {
    dispatch({ type: 'STOP_AUDIO_REQUEST' });
  }

  function setSoundRate() {
    dispatch({
      type: 'SET_SOUND_RATE_REQUEST',
      payload: { soundRate: soundRate === 1 ? 2 : 1 },
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isPlaying ? pause : play}>
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          size={30}
          color="#1279ff"
        />
      </TouchableOpacity>
      <View style={styles.rightControls}>
        <TouchableOpacity onPress={setSoundRate}>
          <Text
            style={[
              styles.rateControl,
              {
                borderColor: soundRate === 1 ? '#999' : '#1279ff',
                color: soundRate === 1 ? '#999' : '#1279ff',
              },
            ]}
          >
            2X
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stop}>
          <Icon name="close" size={25} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    backgroundColor: '#eee',
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: 80,
  },
  rateControl: {
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
});
