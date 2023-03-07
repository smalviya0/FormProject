import React from 'react';
import ReactDOM from 'react-dom/client';
import store  from './redux/store'
import { Provider } from 'react-redux'
// import AppRoutes from "./routes/AppRoutes";
// import "./tailwind.css";
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <AppRoutes /> */}
    <App />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();

