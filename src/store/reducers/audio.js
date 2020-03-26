const INITIAL_STATE = {
  soundObject: null,
  isPlaying: false,
  soundFinished: true,
  soundDuration: null,
  soundPosition: null,
};

export function audio(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SOUND_OBJECT':
      return {
        ...state,
        soundObject: action.payload.sound,
        isPlaying: true,
        soundFinished: false,
      };

    case 'PLAY_AUDIO_SUCCESS':
      return { ...state, isPlaying: true, soundFinished: false };

    case 'PAUSE_AUDIO_SUCCESS':
      return { ...state, isPlaying: false };

    case 'STOP_AUDIO_SUCCESS':
      return { ...state, isPlaying: false, soundFinished: true };

    case 'SET_SOUND_POSITION':
      return { ...state, soundPosition: action.payload.position };

    case 'SET_SOUND_DURATION':
      return { ...state, soundDuration: action.payload.duration };

    default:
      return state;
  }
}
