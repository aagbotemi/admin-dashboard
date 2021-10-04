import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Products from "./pages/product/Products";
import Transactions from "./pages/Transactions";
import Users from "./pages/user/Users";
import ProductDetail from "./pages/product/ProductDetail";
import UserDetail from "./pages/user/UserDetail";
import NewUser from "./pages/user/NewUser";
import NewProduct from "./pages/product/NewProduct";
import NotFound from './pages/404';

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
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
