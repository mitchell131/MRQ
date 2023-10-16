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
import Price from '../Price/Price';
import { usePrevious } from '@/hooks/usePrevious';
import classnames from 'classnames';

type SymbolCardProps = {
  id: string;
};

const SymbolCard = ({ id }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(selectStocks)[id];

  const dispatch = useAppDispatch();

  const price = useAppSelector(selectPriceById(id));
  // TODO Intorduce typing here
  const formattedMoney = formatAmount( price,  { noDecimal: true }  );

  const prevPrice = usePrevious( price ) || 0;
  // Did price change boolean
  // const priceChanged =  !!prevPrice && ( prevPrice !== price );

  // TODO Intorduce typeng heres
  const imgSrc = trend !== null ?  STOCK_ICONS_MAP[trend] : ''

  const isSelected = useAppSelector(selectChartSelectedId(id))

  const handleOnClick = () => {
    console.log(isSelected)
    dispatch(updateSelectedId(!isSelected ? id: 'fassske'))
  }

 // Can use same func for all case. If pos show green, If neg show red
  const classNamea = classnames( 'symbolCard', {
    'symbolCard__selected': isSelected,
    'symbolCard__shake': getPriceDropInPerc(price, prevPrice) > 25,
    'symbolCard__positive': getPriceDropInPerc(price, prevPrice) < 0,
    'symbolCard__negative': getPriceDropInPerc(price, prevPrice) > 0,
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
        <div>{marketCap}</div>
       </div>
    </div>
    </div>
  );
};

export default SymbolCard;
