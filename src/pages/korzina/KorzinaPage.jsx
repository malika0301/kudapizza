import React, { useContext } from 'react'
import { CartContext } from '../../context/ChangeCart'
import { LanguageContext } from '../../context/ChangeLanguage'

const KorzinaPage = () => {
  const { cart, increase, decrease } = useContext(CartContext)
const {lan} = useContext(LanguageContext)

  return (
    <section className='pt-[90px]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        <h1 className='text-2xl font-bold mb-6'> {lan.korzina} </h1>

        {cart.length === 0 ? (
          <p> {lan.korzina_b} </p>
        ) : (
          <div className='flex flex-col gap-4'>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between border p-4 rounded-lg bg-white shadow-sm'
                >
                  {/* Левая часть: картинка + текст */}
                  <div className='flex gap-4 items-center'>
                    <img
                      className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded'
                      src={item.image}
                      alt={item.title}
                    />

                    <div>
                      <h2 className='font-semibold text-lg'>{item.title}</h2>
                      <p className='text-gray-600'>{item.basePrice} ₽</p>
                    </div>
                  </div>

                  {/* Правая часть: кнопки */}
                  <div className='flex items-center justify-between md:justify-end gap-3'>
                    <button
                      onClick={() => decrease(item.id)}
                      className='px-3 py-1 border rounded text-lg py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-white bg-[orangered]'
                    >
                      −
                    </button>

                    <span className='min-w-[20px] text-center font-medium py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-[orangered] bg-white'>
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increase(item.id)}
                      className='px-3 py-1 border rounded text-lg py-[10px] px-5 cursor-pointer text-[18px] rounded-2xl text-white bg-[orangered]'
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default KorzinaPage
