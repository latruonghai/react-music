import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data3 } from '../typings/data/data';
import logger from 'redux-logger';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const initialState = {
  current: false,
  controls: false,
  playing: false,
  repeat: false,
  song: {
    index: null,
    id: '',
    title: '',
    linkimg: '',
    src: '',
    more: '',
  },
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSongIndex: (state, action) => {
      state.song = data3.find(value => value.index === action.payload);
    },
    setRepeat: (state, action) => {
      state.shuffle = action.payload;
    },
  },
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const { setControls, setCurrent, setPlaying, setSongIndex, setRepeat } =
  playerSlice.actions;

export default playerSlice.reducer;
