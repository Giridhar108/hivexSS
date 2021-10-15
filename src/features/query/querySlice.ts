import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IoneQuery, Iquery} from '../../types/types';

export const initialState: Iquery = {
  oneQuery: {text: '', response: '', status: ''},
  lineQuery: [],
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
      if (action.payload.type !== 'history') {
        state.lineQuery.push(response);
      }
    },
    deleteQuery: (state, action: PayloadAction<{idx: number | undefined}>) => {
      state.lineQuery = state.lineQuery.filter((el, i) => i !== action.payload.idx);
    },
  },
});

export const {setQuery, deleteQuery} = counterSlice.actions;

export default counterSlice.reducer;
