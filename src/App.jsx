import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileList from './component/ProfileList'


const user = [{
  name : "양동민",
  age : "25",
  isOnline : true
},{
  name : "양동이",
  age : "15",
  isOnline : false
},{
  name : "양동동",
  age : "35",
  isOnline : true
}]

function App() {

  return (
    <>
      <ProfileList users={user}/>
    </>
  )
}

export default App
