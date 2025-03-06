import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import FragrancePage from './componants/FragracePage';
import BuyNowPage from './componants/BuyNowPage';
import AdminDashboard from './componants/AdminDashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter ([
            {
              path : "/",
              element : <App/>, 
              children : [{path : "/fragrences/:id",element : <FragrancePage/>},{path : "/BuyNow",element : <BuyNowPage/>}]
            },
            {
              path : "/U2FsdGVkX18gWp8/iSKiyhKPB5FWr0dLigHLVCCzwow=",
              element : <AdminDashboard></AdminDashboard>
            }
           

      ])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
