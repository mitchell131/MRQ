import { TAppState } from "./definitions";
import { PriceHistoryState } from './priceHistorySlice'
import { IStocksSlice, StocksState } from "./stocksSlice";

// Price History Slice
export const selectSymbolInfo = (state: TAppState) => state.priceHistory.symbol;
export const selectPriceHistory = (state: TAppState) => state.priceHistory.history;
// export const apiState = (state: TAppState) => state.priceHistorySlice.apiState;

export const selectStockIds = (state: TAppState) => state.stocks.ids;
export const selectStocks = (state: TAppState) => state.stocks.entities;
// export const apiState = (state: TAppState) => state.stocksSlice.apiState;
export const selectPrices = (state: TAppState) => state.prices;

// Reselector => put in different file
