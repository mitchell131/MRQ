import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks } from '@/store/stocksSlice';
import { selectStockIds, selectPrices } from '@/store/selectors';
type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
};

const SymbolsGrid = ({ onSymbolClick }: SymbolsGridProps) => {
  // Maybe we change to useSelector here so we can get part of state only sometime?
  const stockSymbols = useAppSelector(selectStockIds);
  const prices = useAppSelector(selectPrices);
  const dispatch = useAppDispatch();
  // TODO - This has to be in an epic. We should not fetch from component but in
  // middleware then present if we have data in component
  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <>
      {stockSymbols.map((id, i) => (
        <SymbolCard price={prices[id]} key={i} id={id} />
      ))}
    </>
  );
};

export default SymbolsGrid;
