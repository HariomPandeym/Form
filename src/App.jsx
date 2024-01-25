import { useState } from 'react'
import './App.css'

function App() {
const [formData,setformData]=useState({"firstname":""})
function changeHandler(event)
{
  console.log(formData.firstname,Math.random)
  setformData((prevData)=>{
    return {
      ...prevData
      [event.target.firstname]=event.target.value
    }

  })
}
  return (
    <>
      <form action="">

        <input type="text" placeholder='First Name' onChange={changeHandler} name='firstname'/>
      </form>
    </>
  )
}

export default App
