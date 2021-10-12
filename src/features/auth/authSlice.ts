import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface auth {
  loading: boolean;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
  status: {status?: 'idle'; id?: ''; explain?: ''};
}

export const initialState: auth = {
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
      state.status = {id: action.payload?.id, explain: action.payload?.explain};
      if (!action.payload?.id) {
        state.status = {status: 'idle'};
      }
    },
  },
});

export const {authenticateSuccess, authenticateFailure, setLoading} = counterSlice.actions;

export default counterSlice.reducer;
