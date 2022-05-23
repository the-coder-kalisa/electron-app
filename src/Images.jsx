
import React, {useState} from 'react'

const {ipcRenderer} = window.require('electron');

function Images() {
    const [imageUrl, setImageUrl] = useState(null);
    ipcRenderer.on('image', (e, arg)=>{
        setImageUrl(arg)  
        console.log(arg)
    })
  return (
      <img alt="hello" className='min-h-full' src={imageUrl}/>
  )
}

export default Images