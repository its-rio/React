"use client"
import axios from 'axios'
import React,{useState} from 'react'


const page = () => {
  const [images, setImages] = useState([])
  let getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      setImages(data);
      // console.log(images)
    } catch (error) {
      console.error("Error aa gaya")
    }
    
  }
  return (
    <>
    <div> 
      <h1>Main Page</h1> <br/>
      <button onClick={getImages} className='px-5 py-3 bg-green-700 font-bold rounded-xl m-5 text-white'>Get Images </button>
      <div className='p-10'>
          {images.map((elem, i)=>{
            return <img key={i} 
            src={elem.download_url}
            width={300} height={300} className='rounded-xl m-10 inline-block'
            />
          })}
      </div>
    </div>

    </>
  )
}
 
export default page