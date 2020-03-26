import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Audio } from 'expo-av';

// function* createSoundRequest({ uri }) {
//   const { sound } = await Audio.Sound.createAsync(
//     { uri },
//     { shouldPlay: true },
//     onSoundStatusUpdate
//   );
// }

// // function onSoundStatusUpdate({positionMillis, durationMillis}) {
// //   yield put({
// //     type: 'SET_SOUND_POSITION',
// //     payload: { position: positionMillis },
// //   })
// //   yield put({
// //     type: 'SET_SOUND_DURATION',
// //     payload: { duration: status.durationMillis },
// //   })
// // }
function* playAudioRequest({ payload }) {
  const { soundObject } = payload;
  soundObject.playAsync();

  yield put({
    type: 'PLAY_AUDIO_SUCCESS',
  });
}

function* pauseAudioRequest({ payload }) {
  const { soundObject } = payload;
  soundObject.pauseAsync();

  yield put({
    type: 'PAUSE_AUDIO_SUCCESS',
  });
}

function* stopAudioRequest({ payload }) {
  const { soundObject } = payload;
  soundObject.stopAsync();

  yield put({
    type: 'STOP_AUDIO_SUCCESS',
  });
}

function* changeAudioSeekPositionRequest({ payload }) {
  const { soundObject, seekPosition } = payload;

  soundObject.setPositionAsync(seekPosition);

  yield call(playAudioRequest, { payload: { soundObject } });
}

export default all([
  takeLatest('PLAY_AUDIO_REQUEST', playAudioRequest),
  takeLatest('PAUSE_AUDIO_REQUEST', pauseAudioRequest),
  takeLatest('STOP_AUDIO_REQUEST', stopAudioRequest),
  takeLatest(
    'CHANGE_AUDIO_SEEK_POSITION_REQUEST',
    changeAudioSeekPositionRequest
  ),
]);
