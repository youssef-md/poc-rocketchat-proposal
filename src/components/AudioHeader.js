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

  function play() {
    dispatch({ type: 'PLAY_AUDIO_REQUEST' });
  }

  function pause() {
    dispatch({ type: 'PAUSE_AUDIO_REQUEST' });
  }

  function stop() {
    dispatch({ type: 'STOP_AUDIO_REQUEST' });
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
      <TouchableOpacity onPress={stop}>
        <Icon name="close" size={25} color="#1279ff" />
      </TouchableOpacity>
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
});
