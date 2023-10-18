import { createSelector } from "@reduxjs/toolkit";
import { selectChartSelected, selectPrices, selectSymbolInfo } from "./selectors";

/**
 * @name selectPriceById
 * @param id - Takes id name of stock as string
 * @returns Stock Price 
 * Triggered when prices are uodated, then uses reselector to use cache or update component
 */
 export const selectPriceById = ( id: string ) => createSelector(
    selectPrices,
    ( prices ) =>  prices[id]
  );

export const selectChartSelectedId = ( id: string )  => createSelector(
  selectChartSelected,
  ( symbol ) =>  symbol === id
);

