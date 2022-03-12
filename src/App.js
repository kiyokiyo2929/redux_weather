import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"
import Information from './components/Information';
import Map from "./components/Map";
import DailyReports from './components/DailyReport';
import HourlyReports from './components/HourlyReport';
import TodayReport from './components/TodayReport';
import Today_Information from './components/Today_Information';

function App() {
  return (
    <div className="App">
      <Search/>
      <Today_Information/>
      <Information/>
      <Map/>
      <DailyReports/>
      <HourlyReports/>
      <TodayReport/>
    </div>
  );
}

export default App;
