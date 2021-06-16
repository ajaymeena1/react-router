import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Form from './Form'
import User from './User'
import Delete from './Delete'
import Error from './Error'
import Counter from './Counter'





function App() {
  return (
   <>
   <Switch>
     <Route exact path ='/' component={Form}></Route>
     <Route path='/user' component={User}></Route>
     <Route path='/del' component={Delete} ></Route>

     <Route component={Error}></Route>

   </Switch>
   {/* <Counter /> */}
   {/* <Form />
   <User /> */}

   </>
  );
}

export default App;

