import { useEffect } from 'react';
import './priceChart.scss';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPriceHistory } from '@/store/priceHistorySlice';
import { selectPriceHistory, selectSymbolInfo } from '@/store/selectors';
type PriceChartProps = {
  // symbolId: string | null;
};
const PriceChart = () => {

  // TODO - This should be in an epic and we call fetchPriceHistory from within that layer not in here
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (symbolId !== null) {
  //     dispatch(fetchPriceHistory(symbolId));
  //   }
  // }, [dispatch, symbolId]);

  const data = useAppSelector(selectPriceHistory);
  const symbolInfo = useAppSelector(selectSymbolInfo);
  return (
    <div className="priceChart">
      <div className="priceChart__info">{symbolInfo}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
