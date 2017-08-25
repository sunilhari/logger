import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

render((
    <BrowserRouter>
        <div className = "container">
        <Login/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
