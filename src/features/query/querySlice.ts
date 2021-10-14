import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IoneQuery, Iquery} from '../../types/types';

export const initialState: Iquery = {
  oneQuery: {text: '', response: '', status: ''},
  lineQuery: [
    {text: '{"action":"pong"}', response: 'Hare Krishna', status: 'resolve'},
    {text: '{"action":"pong"}', response: 'Hare Krishna', status: 'reject'},
  ],
};

export const counterSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<IoneQuery>) => {
      const response = {
        text: action.payload.text,
        response: action.payload.response,
        status: action.payload.status,
      };
      state.oneQuery = response;
      state.lineQuery.push(response);
    },
  },
});

export const {setQuery} = counterSlice.actions;

export default counterSlice.reducer;
