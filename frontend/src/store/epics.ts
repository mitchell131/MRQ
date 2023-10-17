import { Observable, of } from "rxjs";
import { Action } from "@reduxjs/toolkit";
import { filter, mergeMap } from "rxjs/operators";
import { updateSelectedId } from "./stockChartSlice";
import { clearChartHistory, fetchPriceHistory } from "./priceHistorySlice";

/**
 * Reacts to stock chart selected and fires action to fetch chart history
 * @method handleFetchChart
 * @category epics
 */

export const handleFetchChart = (action$: Observable<Action>) =>
  action$.pipe(
    filter(updateSelectedId.match),
    mergeMap(({ payload }) => {
      return payload !== ""
        ? of(fetchPriceHistory(payload))
        : of(clearChartHistory());
    })
  );
