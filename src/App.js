import './App.css'
import {InvestorRegistrationForm} from "./investorregistration/investorRegistrationForm";
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <InvestorRegistrationForm />
            </div>
        );
    }
}

export default App;
