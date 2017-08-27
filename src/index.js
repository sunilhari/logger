import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App/App'

const store = configureStore();
render((
    <Provider store = {store}>
        <BrowserRouter>
            <div className="container">
                <Login/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
