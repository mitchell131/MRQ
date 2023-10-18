import './symbolCard.scss';
import React, { useState } from 'react';
import { updateSelectedId } from '@/store/stockChartSlice';
import { selectChartSelectedId, selectPriceById } from '@/store/reselectors';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatAmount, getPriceDropInPerc } from '../../utils/money.util'
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { STOCK_ICONS_MAP } from '../SymbolsGrid/definitions';
import { selectStocks } from '@/store/selectors';
import { usePrevious } from '@/hooks/usePrevious';
import classnames from 'classnames';

type SymbolCardProps = {
  id: string;
};

const SymbolCard = ({ id }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(selectStocks)[id];

  const dispatch = useAppDispatch();

  const isSelected: boolean = useAppSelector(selectChartSelectedId(id))
  const price: number = useAppSelector(selectPriceById(id));
  // TODO Intorduce typing here
  const formattedMoney: string = formatAmount(price | 0, { noDecimal: true });

  const formattedMarketCap: string = formatAmount(marketCap, { noDecimal: true });
  // Get Previous So We Compare
  const prevPrice: number = usePrevious(price) || 0;
  // TODO Intorduce typing here
  const imgSrc: string | undefined = trend !== null ? STOCK_ICONS_MAP[trend] : ''

  const handleOnClick = () => {
    dispatch(updateSelectedId(!isSelected ? id : ''))
  }

  const priceDrop: number = getPriceDropInPerc(price, prevPrice)

  // Can use same func for all case. If pos show green, If neg show red
  const classNamea = classnames('symbolCard', {
    'symbolCard__selected': isSelected,
    'symbolCard__shake': priceDrop > 25,
    'symbolCard__positive': priceDrop < 0,
    'symbolCard__negative': priceDrop > 0 && priceDrop < 25,
  })

  return (
    <div onClick={handleOnClick} className={classNamea}>
      <div className='symbolCard__header'>
        <span>{id}</span>
        <img className='symbolCard__header--img' src={imgSrc || ''} />
      </div>
      <div className='symbolCard__body'>
        <div className="symbolCard__body--left">
          <p>Price:</p>
          <CompanyIcon />
          <IndustryLogo />
          <MarketCapIcon />
        </div>
        <div className="symbolCard__body--right">
          <p>{formattedMoney}</p>
          <div>{companyName}</div>
          <div>{industry}</div>
          <div>{formattedMarketCap}</div>
        </div>
      </div>
    </div>
  );
};

export default SymbolCard;
