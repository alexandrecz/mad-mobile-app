import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ApplicationRoutes } from './routes';
import { UserProvider } from './context/user.provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
