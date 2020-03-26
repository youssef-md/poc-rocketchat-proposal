import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Audio } from 'expo-av';

function* createAudio({ uri }) {
  const { sound } = yield call(Audio.Sound.createAsync, [
    { uri },
    { shouldPlay: true },
    onSoundStatusUpdate,
  ]);

  yield put({ type: 'CREATE_AUDIO_SUCCESS', sound });
}

function onSoundStatusUpdate(status) {}

export default all([takeLatest('CREATE_AUDIO_REQUEST', createAudio)]);
