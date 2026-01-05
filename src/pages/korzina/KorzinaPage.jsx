import React, { useContext } from 'react'
import { CartContext } from '../../context/ChangeCart'

const KorzinaPage = () => {
  const { cart, increase, decrease } = useContext(CartContext)

  return (
    <section className='pt-[90px]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        <h1 className='text-2xl font-bold mb-6'>Корзина</h1>

        {cart.length === 0 ? (
          <p>Корзина пустая</p>
        ) : (
          <div className='flex flex-col gap-4'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between border p-4 rounded'
              >
                <div>
                  <img className='w-full h-[100px] object-cover' src={item.image} alt="" />
                  <h2 className='font-semibold'>{item.title}</h2>
                  <p>{item.basePrice} ₽</p>
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    onClick={() => decrease(item.id)}
                    className='px-3 py-1 border'
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increase(item.id)}
                    className='px-3 py-1 border'
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
