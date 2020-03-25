import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import AudioMessage from '../components/Audio';

export default function Room() {
  return (
    <View style={styles.container}>
      <AudioMessage />
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
