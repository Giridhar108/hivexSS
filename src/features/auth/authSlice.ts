import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Iauth } from '../../types/types';

export const initialState: Iauth = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  status: {status: 'idle'},
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    authenticateSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.sessionKey = action.payload.sessionKey;
      state.login = action.payload.login;
      state.sublogin = action.payload.sublogin;
      state.status = {status: 'idle'};
    },
    authenticateFailure: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.loading = false;
      state.sessionKey = null;
      state.login = null;
      state.sublogin = null;
      state.status = !action.payload?.id ? {status: 'idle'} : {id: action.payload?.id, explain: action.payload?.explain};
    },
  },
});

export const {authenticateSuccess, authenticateFailure, setLoading} = counterSlice.actions;

export default counterSlice.reducer;
