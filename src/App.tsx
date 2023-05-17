import React from 'react'
import './App.css'
import Form from './Components/Form'
// import Mani from './Components/Mani'
 import SecondPage from './Components/SecondPage'
 import ThirdPage from './Components/ThirdPage'
function App() {
  const [page1,setpage1]=React.useState(true)
  const handlesubmit=()=>{
    setpage1(false);
  };
  return (
    <>
      {page1?<div><h2>Please Enter Your Details</h2>
      <Form handlesubmit={handlesubmit}/></div>
        :<div>
      <SecondPage/>
      <ThirdPage/></div>}
      
    </>
  )
}

export default App
