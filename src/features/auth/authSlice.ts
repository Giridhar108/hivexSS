import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface auth {
  loading: boolean;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
}

export const initialState: auth = {
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
      state.loading = false;
      state.sessionKey = action.payload.sessionKey;
      state.login = action.payload.login;
      state.sublogin = action.payload.sublogin;
    },
    authenticateFailure: (state) => {
      state.sessionKey = null;
      state.login = null;
      state.sublogin = null;
    },
  },
});

export const {authenticateSuccess, authenticateFailure} = counterSlice.actions;

export default counterSlice.reducer;
