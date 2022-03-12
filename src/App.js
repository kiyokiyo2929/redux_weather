import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"
import Information from './components/Information';
import Map from "./components/Map";
import DailyReports from './components/DailyReport';
import HourlyReports from './components/HourlyReport';
import TodayReport from './components/TodayReport';

function App() {
  return (
    <div className="App">
      <Search/>
      <Map/>
      <TodayReport/>
      <DailyReports/>
      <HourlyReports/>
      <Information/>
  
    </div>
  );
}

export default App;
