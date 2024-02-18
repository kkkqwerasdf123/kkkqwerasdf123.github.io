import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./pages/test/Test.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<App/>}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
