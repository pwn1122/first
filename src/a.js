import React from 'react'
import shuffleArray from './utility/shuffleArray.js'

function App() {
  const images = ['1', '2', '3', '4', '5', '6', '7', '8']
  const totalImages = [...images, ...images]

  shuffleArray(totalImages)

  return (
   <div id="container">
    {
      totalImages.map(val =>
        <div key={Math.random()}>

         <img className="main" src={`/images/wallpaper${val}.jpg`} />
         <img className="cover" src="https://c4.wallpaperflare.com/wallpaper/305/547/705/facebook-cover-abstract-wallpaper-preview.jpg" />
        </div>
      )
    }
   </div>
  )
}

export default App