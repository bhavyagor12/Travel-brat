import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { StateProvider } from './Components/Functions/StateProvider';
import  reducer, {  initialState } from './Components/Functions/reducer';
ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
   <App />
  </StateProvider>
 
</React.StrictMode>,
document.getElementById('root')
);


