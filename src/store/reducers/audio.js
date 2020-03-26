const INITIAL_STATE = {
  soundObject: null,
  isPlaying: false,
  soundDuration: null,
  soundPosition: null,
};

export function audio(state = INITIAL_STATE, action) {
  const newState = { ...state };

  switch (action.type) {
    case 'CREATE_AUDIO_SUCCESS':
      newState.soundObject = action.sound;
      break;
    case 'PLAY_AUDIO_SUCCESS':
      newState.isPlaying = true;
      break;
    case 'PAUSE_AUDIO':
    case 'STOP_AUDIO':
      newState.isPlaying = false;
    default:
      return state;
  }
}
