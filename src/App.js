import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"
import Information from './components/Information';
import Map from "./components/Map";
import WeeklyReports from './components/WeeklyReport';
import HourlyReports from './components/HourlyReport';

function App() {
  return (
    <div className="App">
      <Search/>
      <Information/>
      <Map/>
      <WeeklyReports/>
      <HourlyReports/>
    </div>
  );
}

export default App;
