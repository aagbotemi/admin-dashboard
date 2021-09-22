import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      Hello <br />
      
    </Router>
  );
}

export default App;
