import { useEffect, useState } from 'react'

import './styles/App.css';

function App() {
  const [image, setImage] = useState(null);

  useEffect(()=>{
    fetch('https://libyantourismapi.vercel.app/places')
    .then(res => res.json())
    .then(data => setImage(data[0].Image));
  },[]);



  return (
    <div>
        
    </div>
  )
}

export default App
