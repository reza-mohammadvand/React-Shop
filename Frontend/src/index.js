import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"

import './index.css';
import App from './App';
import store from "./Store"


const Element = <Provider store={store} > <App /></Provider>
const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(Element)
