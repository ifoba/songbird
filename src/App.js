import React from 'react';
import Menu from './components/menu/Menu';
import ExampleList from './components/ExampleList/ExampleList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { connect } from 'react-redux';
import Modal from './components/modal/Modal';

const connector = connect(
  state => ({
    gameEnd: state.game.gameEnd
  })
)


const App = ({gameEnd}) => {   

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/game">
            <div className="d-flex flex-row justify-content-between">
              <h1 className='logo'>SONGBIRD</h1>
            </div>         
            <Menu/>
            <ExampleList />
            {(gameEnd) ? <Modal/>: null}
          </Route>
          <Route path="/">
            <Home/>
          </Route> 
        </Switch>                 
        </div>
       
    </Router>
  )
}

export default connector(App)
