import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IoneQuery {
  text: string;
  response: string;
  status: string;
}

interface query {
  oneQuery: IoneQuery;
  lineQuery: IoneQuery[];
}

export const initialState: query = {
  oneQuery: {text: '', response: '', status: ''},
  lineQuery: [],
};

export const counterSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<any>) => {
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
