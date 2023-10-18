import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { selectStockIds, selectPrices } from '@/store/selectors';
import React from 'react';

const SymbolsGrid = () => {

  const stockSymbols = useAppSelector(selectStockIds);

  return (
    <>
      {stockSymbols && stockSymbols.map((id, i) => (
        <React.Fragment key={i}>
          <SymbolCard id={id} />
        </React.Fragment>
      ))}
    </>
  );
};

export default SymbolsGrid;
