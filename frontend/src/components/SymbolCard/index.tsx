import { useCallback } from 'react';
import './symbolCard.scss';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatAmount } from '../../utils/money.util'
import { useAppSelector } from '@/hooks/redux';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id]);

  const formattedMoney = formatAmount( price,  { noDecimal: true }  );

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div className='symbolCard__heading'>
        <span>{id} - {trend}</span>
      </div>
      <div className='symbolCard__content'>
      <div>Price:</div>
      <div>{formattedMoney} </div>
      <CompanyIcon /> <div>{companyName}</div>
      <IndustryLogo /> <div>{industry}</div>
      <MarketCapIcon /> <div>{marketCap}</div>
    </div>
    </div>
  );
};
export default SymbolCard;
