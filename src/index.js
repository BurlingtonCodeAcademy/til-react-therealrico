import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import allFacts from './allFacts';

class Reflex extends React.Component{
    render() {
        return(
        <BrowserRouter>
        <Route exact path= "/" component={App} />
        <Route exact path= "/facts" component={allFacts} />
        {/*<Route exact path= "/fact/:objectId?" component={singleFact} />*/}
        </BrowserRouter>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
