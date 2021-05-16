import Header from "./containers/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductListing from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetails} />
            <Route>404 NOT FOUND</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
