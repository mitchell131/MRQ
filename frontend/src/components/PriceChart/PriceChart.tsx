import './priceChart.scss';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '@/hooks/redux';
import { selectChartIsLoading, selectPriceHistory, selectSymbolInfo } from '@/store/selectors';
import LoadingSpinner from '../LoadingSpinner/loadingSpinner';

const PriceChart = () => {

  const isLoading = useAppSelector(selectChartIsLoading)
  const symbolInfo = useAppSelector(selectSymbolInfo);
  // Timestamp changes everytime here so we cannot prevent re-rendering on same symbol click
  const data = useAppSelector(selectPriceHistory);

  const renderChart = (
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
  )

  return (
    <>{isLoading ? <LoadingSpinner /> : renderChart}</>
  );
};

export default PriceChart;
