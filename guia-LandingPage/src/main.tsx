import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from "./pages/Home"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Home />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </>
  </React.StrictMode>
)