import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
//This is Type of Functional Component We can use in Our Wevsute
function App() {
  //we can define many const in the component and use in the return()
  // we can define the link and use it in the anchor tag
  //const person = {name:'Arijeet', age:30};
  //booleans and object are not valid
  //{title}(Dynamic Values)should be used to get the value of the title from the const
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
