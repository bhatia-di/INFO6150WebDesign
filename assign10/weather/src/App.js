import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home/Home';
import { HourlyWeather } from './Weather/HourlyWeather';
import { getNextFiveDays } from './utils/utils';

function App() {
  const nextFiveDays = getNextFiveDays();


  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Navbar />
          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {
                        nextFiveDays.map((day, index) => {
                            return (
                              <Route path={"/" + day} element={<HourlyWeather />} />

                            )
                        })
            }
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
