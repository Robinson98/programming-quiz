import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import LastPage from './components/layout/lastPage'
import PersonalInfo from './components/basicInfo/PersonalInfo'
import PanasForm from './components/nasaTLX/panasForm'
import Question1 from './components/questions/question1'
import Question2 from './components/questions/question2'
import Question3 from './components/questions/question3'
import Question4 from './components/questions/question4'
import Question5 from './components/questions/question5'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={PersonalInfo} />
            <Route path='/panasform' component={PanasForm} />
            <Route path='/question1' component={Question1} />
            <Route path='/question2' component={Question2} />
            <Route path='/question3' component={Question3} />
            <Route path='/question4' component={Question4} />
            <Route path='/question5' component={Question5} />
            <Route path='/last' component={LastPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// Video 17

export default App;
