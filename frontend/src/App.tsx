import './App.css';
import { useAppDispatch } from '@/hooks/redux';
import { registerEpics } from './store';
import { fetchAllStocks } from './store/stocksSlice';
import Navbar from '@/components/Navbar';
import Router from '@/router';

registerEpics();          

function App() {

  // Just one time on load for init data. no need of use effect
  const dispatch = useAppDispatch();
  dispatch(fetchAllStocks());
      
  return (
    <div className="App">
      <h2>STONKS</h2>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
