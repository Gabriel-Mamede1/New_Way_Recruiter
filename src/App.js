import {React} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";


import {Home} from "./pages/Home/Home";
import{Login} from "./pages/Login/Login";

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
