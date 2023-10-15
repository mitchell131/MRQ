import './App.css';
import Navbar from '@/components/Navbar';
import Router from '@/router';
import { registerEpics } from './store';

registerEpics();

function App() {
  return (
    <div className="App">
      <h2>STONKS</h2>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
