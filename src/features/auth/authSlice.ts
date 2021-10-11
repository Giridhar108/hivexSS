import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ActionTypes} from '../../store/constants';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateSuccess: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.loading = false;
      state.sessionKey = action.payload.sessionKey;
      state.login = action.payload.login
      state.sublogin = action.payload.sublogin
    },
    authenticateFailure: (state) => {
      console.log('act');
      state.sessionKey = null;
      state.login = null;
      state.sublogin = null;
    },
  },
  extraReducers: (builder) => {
    /*  builder
   .addCase(authenticate, (state) => {
        state.loading = true
      }) */
  },
});

export const {authenticateSuccess, authenticateFailure} = counterSlice.actions;

export default counterSlice.reducer;
