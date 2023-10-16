import { combineReducers } from 'redux';
import pricesSlice from './pricesSlice';
import stocksSlice from '@/store/stocksSlice';
import priceHistorySlice from '@/store/priceHistorySlice';
import stockChartSlice from './stockChartSlice';

export const DUMMY_ACTION = { type: 'TYPE' };

export const rootReducer = combineReducers( {
  prices: pricesSlice.reducer,
  stocks: stocksSlice.reducer,
  priceHistory: priceHistorySlice.reducer,
  stockChart: stockChartSlice.reducer,
} );

export const getInitialStoreState = () => rootReducer( {} as any, DUMMY_ACTION );
