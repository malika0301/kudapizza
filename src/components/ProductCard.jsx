import React, { useContext } from 'react'
import { CartContext } from '../context/ChangeCart'

const ProductCard = ({ id, image, title, basePrice }) => {

  const { cart } = useContext(CartContext);
  return (
    <div
      key={id}
      className='max-w-[300px] w-full p-5 mb-[15px] cursor-pointer bg-gray-100 rounded-2xl flex items-center justify-center flex-col gap-[5px]'>
      <img className='w-full h-[280px] object-cover' src={image} alt="" />
      <p className='text-[20px] font-bold text-[orangered] mt-[-50px] bg-gray-100 px-2 p-1 rounded-md'>{title}</p>
      <div className='flex items-center justify-between w-full my-2'>
        {
          cart.find((el) => el.id === id) ? (
            <div className='flex items-center'> 
              <button onClick={() => addToCart(id)} className='py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-white bg-[orangered]'>-</button>
              <button onClick={() => addToCart(id)} className='py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-[orangered] bg-white'>
                <span></span>
              </button>
              <button onClick={() => addToCart(id)} className='py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-white bg-[orangered]'>+</button>
            </div>
            ) : (
            <button onClick={() => addToCart(id)} className='py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-white bg-[orangered]'>Tanlash</button>
          )}
        <span className='text-[18px] font-bold'>$ {basePrice} </span>
      </div>
    </div>
  )
}

export default ProductCard