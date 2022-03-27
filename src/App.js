import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
          
         
         <Layout/>
       <Switch>
       
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
       </Switch>
    
    
    </div>
  );

   
  
}

export default App;
