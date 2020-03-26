import { call, put, all, takeLatest, select } from 'redux-saga/effects';

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

function* setSoundRateRequest({ payload }) {
  const soundObject = yield select(state => state.soundObject);
  const { soundRate } = payload;

  if (soundObject) {
    soundObject.setRateAsync(soundRate, true);
    yield put({
      type: 'SET_SOUND_RATE_SUCCESS',
      payload: { soundRate },
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
  takeLatest('SET_SOUND_RATE_REQUEST', setSoundRateRequest),
  takeLatest(
    'CHANGE_AUDIO_SEEK_POSITION_REQUEST',
    changeAudioSeekPositionRequest
  ),
]);
