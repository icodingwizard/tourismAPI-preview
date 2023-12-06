import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [image, setImage] = useState(null);

  useEffect(()=>{
    fetch('https://libyantourismapi.vercel.app/places')
    .then(res => res.json())
    .then(data => setImage(data[0].Image));
  },[]);



  return (
    <div>
        <img src={image} alt="" />
    </div>
  )
}

export default App
