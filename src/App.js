import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import TripInfo from './TripInfo'
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/trips/:id' component={redirectToTrip} />
            </Switch>
        </div>
      </Router>
    );
  }
}


function redirectToTrip(){
    const {id} = useParams();
    
    return (
             <TripInfo id={id}/>
    );
}

export default App;
