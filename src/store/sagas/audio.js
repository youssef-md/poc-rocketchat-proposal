import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { Audio } from 'expo-av';

// function* createSound({ payload }) {
//   const { uri } = payload;
//   const { sound } = yield call(
//     Audio.Sound.createAsync,
//     { uri },
//     { shouldPlay: true }
//   );
// }

function* playAudioRequest() {
  const soundObject = yield select(state => state.soundObject);

  if (soundObject) {
    soundObject.playAsync();
    yield put({ type: 'PLAY_AUDIO_SUCCESS' });
  }
}

function* pauseAudioRequest() {
  const soundObject = yield select(state => state.soundObject);

  if (soundObject) {
    soundObject.pauseAsync();
    yield put({
      type: 'PAUSE_AUDIO_SUCCESS',
    });
  }
}

function* stopAudioRequest() {
  const soundObject = yield select(state => state.soundObject);

  if (soundObject) {
    soundObject.stopAsync();
    yield put({
      type: 'STOP_AUDIO_SUCCESS',
    });
  }
}

function* changeAudioSeekPositionRequest({ payload }) {
  const soundObject = yield select(state => state.soundObject);
  const { seekPosition } = payload;

  if (soundObject) {
    soundObject.setPositionAsync(seekPosition);
    yield call(playAudioRequest, { payload: { soundObject } });
  }
}

export default all([
  takeLatest('STOP_AUDIO_REQUEST', stopAudioRequest),
  takeLatest('PLAY_AUDIO_REQUEST', playAudioRequest),
  takeLatest('PAUSE_AUDIO_REQUEST', pauseAudioRequest),
  takeLatest(
    'CHANGE_AUDIO_SEEK_POSITION_REQUEST',
    changeAudioSeekPositionRequest
  ),
]);
