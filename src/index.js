import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import HomeDemo1 from './pages/HomeDemo1';
import HomeDemo2 from './pages/HomeDemo2';
import reportWebVitals from './reportWebVitals';
// basename="template_react"
ReactDOM.render(
	<BrowserRouter>
		<App />
		
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
