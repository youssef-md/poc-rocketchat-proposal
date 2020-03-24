import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import AudioMessage from '../components/Audio';

export default function Rooms() {
  const sound = useMemo(() => new Audio.Sound(), []);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await sound.loadAsync({
  //         uri:
  //           'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
  //       });
  //       alert('downloaded!');
  //     } catch (error) {
  //       alert(error);
  //     }
  //   })();
  // }, []);

  async function play() {
    try {
      // await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      alert(error);
    }
  }

  async function pause() {
    try {
      // await sound.pauseAsync();
      setIsPlaying(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <AudioMessage isPlaying={isPlaying} play={play} pause={pause} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
