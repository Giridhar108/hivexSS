import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import root from '../sagas';
import storage from 'redux-persist/lib/storage'

import authReducer from '../features/auth/authSlice';
import querySlice from '../features/query/querySlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer)

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({thunk: false, serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}}),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    query: querySlice,
  },
  middleware: middleware,
});

sagaMiddleware.run(root);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
