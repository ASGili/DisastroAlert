import EventContainer from './containers/EventsContainer';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <h1>DisastroAlert - made in ReactJS</h1>
      <Routes>
        <Route path="/DisastroAlert/*" element={<ErrorPage/>}/>
        <Route path="/DisastroAlert/" element={<EventContainer />}/>
        <Route path="/DisastroAlert/home/" element={<EventContainer />}/>
        <Route path="/DisastroAlert/disaster/:category" element={<EventContainer />}/>
      </Routes>
    </Router>
  );
}

export default App;
