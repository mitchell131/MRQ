import { useCallback } from 'react';
import './symbolCard.scss';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatAmount } from '../../utils/money.util'
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { STOCK_ICONS_MAP } from '../SymbolsGrid/definitions';
import { updateSelectedId } from '@/store/stockChart';

type SymbolCardProps = {
  id: string;
  price: number;
};

const SymbolCard = ({ id, price }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const dispatch = useAppDispatch();


  // TODO Intorduce typeng here
  const formattedMoney = formatAmount( price,  { noDecimal: true }  );

  // TODO Intorduce typeng here
  const imgSrc = trend !== null ?  STOCK_ICONS_MAP[trend] : ''

  const handleOnClick = () => {
    dispatch(updateSelectedId(id))
  }

  return (
    <div onClick={handleOnClick} className="symbolCard">
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
