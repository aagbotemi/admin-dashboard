import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
      <Sidebar />
      <div className="display">
        <Topbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
