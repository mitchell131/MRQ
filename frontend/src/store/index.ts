import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import { handleFetchChart } from './epics';
import { rootReducer } from './rootReducer';

// Redux Observable
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer:    rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .prepend(thunkMiddleware)
  .concat(epicMiddleware)
});

const epics: any[] = [
  handleFetchChart,
]

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const registerEpics = () => epicMiddleware.run( combineEpics( ...epics ) );

epicMiddleware.run( combineEpics() );

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
