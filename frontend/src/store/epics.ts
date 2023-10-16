import { Observable } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import { filter, map } from 'rxjs/operators';
import { updateSelectedId } from './stockChartSlice';
import { fetchPriceHistory } from './priceHistorySlice';


/**
 * Reacts to stock chart selected and fires action to fetch chart history
 * @method handleFetchChart
 * @category epics
 */

 export const handleFetchChart = ( action$: Observable<Action> ) =>
 action$.pipe(
   filter( updateSelectedId.match ),
   map( ( { payload } ) => {
    return  fetchPriceHistory( payload )
   }
   )
 );
