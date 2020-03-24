import React, { useEffect, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const sound = useMemo(() => new Audio.Sound(), []);

  useEffect(() => {
    (async () => {
      try {
        await sound.loadAsync({
          uri:
            'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3'
        });
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  async function play() {
    try {
      await sound.playAsync();
    } catch (error) {
      alert(error);
    }
  }

  async function pause() {
    try {
      await sound.pauseAsync();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={play}
      >
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={pause}
      >
        <Text style={styles.text}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
