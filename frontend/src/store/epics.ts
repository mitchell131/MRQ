import { Observable } from 'rxjs';
import { Action } from '@reduxjs/toolkit';
import { filter, map } from 'rxjs/operators';
import { updateSelectedId } from './stockChart';
import { fetchPriceHistory } from './priceHistorySlice';


/**
 * Updates the side bets visible and save state in user preferences
 * @method handleVisibleSideBets
 * @category epics
 */

 export const handleFetchChart = ( action$: Observable<Action> ) =>
 action$.pipe(
   filter( updateSelectedId.match ),
   map( ( { payload } ) => {
    console.log('[updateSelectedId] - epic')

    return  fetchPriceHistory( payload )
   }
   )
 );
