import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RoomCard({ thumbnail, title, lastMessage, onPress }) {
  const generateHex = () => Math.floor(Math.random() * 16777215).toString(16);

  return (
    <TouchableOpacity style={styles.roomCard} onPress={onPress}>
      <View
        style={[styles.roomPicture, { backgroundColor: `#${generateHex()}` }]}
      >
        <Text style={styles.roomThumb}>{thumbnail}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomTitle}>{title}</Text>
        <Text>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roomCard: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  roomPicture: {
    width: 50,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomThumb: {
    color: '#fff',
    fontSize: 32,
  },
  roomInfo: {
    marginLeft: 15,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#999',
    paddingBottom: 20,
  },
  roomTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
