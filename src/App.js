import Navbar from "./Navbar";
import Home from "./Home";
//This is Type of Functional Component We can use in Our Wevsute
function App() {
  //we can define many const in the component and use in the return()
  // we can define the link and use it in the anchor tag
  //const person = {name:'Arijeet', age:30};
  //booleans and object are not valid
  //{title}(Dynamic Values)should be used to get the value of the title from the const
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;
