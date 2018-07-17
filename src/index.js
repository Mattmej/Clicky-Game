import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CardData from "./components/CardData";

ReactDOM.render(<App cards={CardData}/>, document.getElementById('root'));
registerServiceWorker();
