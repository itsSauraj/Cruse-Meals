'use client'

import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'

const ImagePicker = () => {

  const inputRef = useRef(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).click();
    }
  }

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) : void => {

    const file = event.target.files[0]

    if (!file){
      return
    }

    const filereader = new FileReader()
    filereader.onload = () => setImageUrl(filereader.result as string)
    filereader.readAsDataURL(file)
  }

  return (<>
      <div>
        {(!imageUrl) ? 
        <div className='w-[200px] h-[200px] border-[1px] border-white text-white 
          flex justify-center items-center text-justify
          hover:opacity-60 cursor-pointer
          '
          onClick={onClick}
          >
          No Image
        </div> : 
          <Image width={200} height={130} src={imageUrl} alt='No Image' onClick={onClick}/>
        }
        <input
          ref={inputRef}
          type='file'
          name='image'
          title='Poster'
          id='image'
          accept="image/png, image/gif, image/jpg, image/jpeg, image/webp"
          className='hidden'
          onChange={handleImageUpload}
        />
      </div>
    </>)
}

export default ImagePicker