const INITIAL_STATE = {
  soundObject: null,
  isPlaying: false,
  soundDuration: null,
  soundPosition: null,
};

export function audio(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SOUND_OBJECT':
      return { ...state, soundObject: action.payload.sound, isPlaying: true };

    case 'PLAY_AUDIO_SUCCESS':
      return { ...state, isPlaying: true };

    case 'PAUSE_AUDIO_SUCCESS':
    case 'STOP_AUDIO_SUCCESS':
      return { ...state, isPlaying: false };

    case 'SET_SOUND_POSITION':
      return { ...state, soundPosition: action.payload.position };

    case 'SET_SOUND_DURATION':
      return { ...state, soundDuration: action.payload.duration };

    case 'CHANGE_AUDIO_SEEK_POSITION':
      break;

    default:
      return state;
  }
}
