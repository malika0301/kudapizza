import React from 'react'

const Card = ({id , image , title}) => {
    return (
    <div key={id} className='w-[300px] flex-shrink-0 mb-[15px] cursor-pointer bg-gray-100 rounded-2xl flex items-center justify-center flex-col gap-[5px]'>
        <img className='w-full h-[280px] object-cover' src={image} alt="" />
        <p className='text-[20px] font-bold text-[orangered] mt-[-50px] bg-gray-100 px-2 p-1 rounded-md'>{title}</p>
    </div>
  )
}

export default Card