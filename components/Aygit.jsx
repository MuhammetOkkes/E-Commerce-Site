import React from 'react'
import Image from "next/image";
import Title from './ui/Title'
import Link from "next/link";


const Aygit = () => {

   const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
  ];
  return (
  <div>
     
      <div className='flex flex-col items-center w-full m-8'>
        <Title addClass="text-[40px]">Öne Çıkan Ürünler</Title>        
      </div>

<div className="grid grid-cols-4 gap-4 mx-11">
      {images.map((image, index) => (
        <div key={index} className="mb-20">
        <Link href="/menu"><Image
            src={`/images/${image}`}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
          />
          </Link>          
        </div>
      ))}
    </div>
  </div>
     
  )
}

export default Aygit
