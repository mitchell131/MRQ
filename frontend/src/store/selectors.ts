import { TAppState } from "./definitions";

// Price History Slice
export const selectSymbolInfo = (state: TAppState) => state.priceHistory.symbol;
export const selectPriceHistory = (state: TAppState) => state.priceHistory.history;
export const seelctChartIsLoading = (state: TAppState) => state.priceHistory.apiState.loading;
export const seelctChartIsError = (state: TAppState) => state.priceHistory.apiState.error;
// Stocks Slice
export const selectStockIds = (state: TAppState) => state.stocks.ids;
export const selectStocks = (state: TAppState) => state.stocks.entities;
export const selectStocksIsLoading = (state: TAppState) => state.stocks.apiState.loading;
export const selectStocksIsError = (state: TAppState) => state.stocks.apiState.error;
// Price Slice
export const selectPrices = (state: TAppState) => state.prices;
// Chart Slice
export const selectChartSelected = (state: TAppState) => state.stockChart.id
