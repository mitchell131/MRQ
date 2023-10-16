import { useState } from 'react';
import './symbolsView.scss';
import SymbolsGrid from '../SymbolsGrid';
import PriceChart from '@/components/PriceChart/PriceChart';

const SymbolsView = () => {

  console.log('[PriceChart] - SymbolsView',)

  return (
    <div>
      <div className="symbolsView">
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart  />
        </div>
        <div className="symbolsView__cards">
          <SymbolsGrid />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
