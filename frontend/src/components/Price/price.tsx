import { useAppSelector } from '@/hooks/redux';
import { selectPriceById } from '@/store/reselectors';
import { formatAmount } from '../../utils/money.util'

type PriceProps = {
    id: string;
  };

const Price = ({id}: PriceProps) => {

const price = useAppSelector(selectPriceById(id));
// TODO Intorduce typing here
const formattedMoney = formatAmount( price,  { noDecimal: true }  );

    return (
        <><p>{formattedMoney}</p></>
    );
};

export default Price;
