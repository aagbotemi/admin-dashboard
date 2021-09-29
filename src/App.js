import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className="sm:flex">
        {/* <div className=""> */}
        <SidebarMobile />
        <Sidebar />
        <div className="display">
          <Topbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Product} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
