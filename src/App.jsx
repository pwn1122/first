import React, { useEffect, useState } from 'react'
import { manage } from './utility/shuffleArray'
import './index.css'
function App() {

  const images = ['1', '2','3','4','5','6','7','8']
  const [storedIndex , setStoredIndexes] = useState([])
  const [totalimages, settotalimages] = useState([...images , ...images])
  const [saveimage , setsavimage] = useState({img: null , idx: null})
 
  useEffect(()=>{
    manage(totalimages)
    // console.log(totalimages)
  },[])

  function handleclick(idx ){
   setStoredIndexes([ ...storedIndex, idx])
    
   if(saveimage.img == null){
    setsavimage( {img:val , idx:idx})
   }
  }
  
  return (
    <div id='container'>
      {
        totalimages.map((val, idx) =>
          <div key={Math.random()}>
             { 
              storedIndex.includes(idx) ?
              <img className='main' src={`/images/wallpaper${val}.jpg`}/>:
              <img onClick={()=> handleclick(idx , val )} className='cover' src='https://cdn.pixabay.com/photo/2022/10/31/12/40/sorrow-7559727_1280.jpg' />
             } 

            </div>
        )
      }
      
    </div>
  )
}

export default App
