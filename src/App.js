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
      <header></header>
      <main>
      <div id="top-part">
        <div id="top-part-left">
          <Search/>
          <TodayReport/>
        </div>
        <div id="top-part-right">
          <Map/>
        </div>
      </div>
      <DailyReports/>
      <HourlyReports/>
      <footer></footer>
      </main>
    </div>
  );
}

export default App;
