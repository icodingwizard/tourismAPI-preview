import { useEffect, useState } from 'react'

// import './styles/App.css';
import Card from './components/Card';

function App() {
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   fetch('https://libyantourismapi.vercel.app/places')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // },[]);



  return (
    <>
          <Card />  
    </>
  )
}

export default App
