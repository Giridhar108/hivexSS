import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IoneQuery, Iquery } from '../../types/types';

export const initialState: Iquery = {
  oneQuery: {text: '', response: '', status: ''},
  lineQuery: [],
};

export const counterSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<IoneQuery>) => {
      state.oneQuery = {
        text: action.payload.text,
        response: action.payload.response,
        status: action.payload.status,
      };
    },
  },
});

export const {setQuery} = counterSlice.actions;

export default counterSlice.reducer;
