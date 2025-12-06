import React from 'react'
import Portfolio from './Portfilio'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Files  from "./Data/particals";




function App( ) {
  return (
    <>
      {/* <Files /> */}
      <Portfolio />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App