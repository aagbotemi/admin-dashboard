import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";
import ProductDetail from "./pages/ProductDetail";
import UserDetail from "./pages/UserDetail";
import NewUser from "./pages/NewUser";
import NewProduct from "./pages/NewProduct";
import { productData } from "./dummyData";

function App() {
  return (
    <Router>
      <div className="sm:flex">
        <SidebarMobile />
        <Sidebar />
        <div className="display">
          <Topbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/new-product" component={NewProduct} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={UserDetail} />
            <Route path="/new-user" component={NewUser} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
