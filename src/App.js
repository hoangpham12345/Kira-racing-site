import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/:something" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
