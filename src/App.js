import './App.css';
import EventContainer from './containers/EventsContainer';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <h1>DisastroAlert</h1>
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<EventContainer />}/>
        <Route path="/home" element={<EventContainer />}/>
        <Route path="/disaster/:category" element={<EventContainer />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
