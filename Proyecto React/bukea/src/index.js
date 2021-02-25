import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import firebaseConfig from './services/Firebase'
// import {FirebaseAppProvider} from 'reactfire'


ReactDOM.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
    {/* <Suspense fallback={'Conectando la app...'}> */}
    <App />
    {/* </Suspense> */}
    </React.StrictMode>,

  // </FirebaseAppProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
