import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { LanguageContext } from "../../context/ChangeLanguage";
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import Card from '../../components/Card';
import useGet from '../../hooks/useGet';
import { CartContext } from '../../context/ChangeCart';

const HomePage = () => {
  const { lan } = useContext(LanguageContext);
  const [setectCategory, setSelectCategory] = useState("2");
  const {data:categories} = useGet("categories");
  const { data:products } = useGet("products");
  const {setCart , cart , increase , decrease , addToCart} = useContext(CartContext);


  return (
    <section className='pt-[90px]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/**Categoriyalar */}
        <div className='flex gap-5 overflow-x-auto items-center'>
          {categories?.map((el) => (
            <div onClick={() => setSelectCategory(el.id)} className='w-[120px] h-[120px]  flex-shrink-0 mb-[15px] cursor-pointer bg-gray-100 rounded-2xl flex items-center justify-center flex-col gap-[5px]'>
              <img className='h-[50px]' src={el.icon} alt="" />
              <p className='text-[20px] font-bold text-[orangered]'>{el.title}</p>
            </div>
          ))
          }
        </div>

        {/**Productlar */}
        <div className='flex gap-5 mt-15 overflow-x-auto items-center'>
          {products?.filter((res) => res?.categoryId == setectCategory).map((el) => (
            <Card {...el} />
          ))}
        </div>

        {/**All  products*/}
        <div>
          <div className='pt-[15px]'>
            {
              categories.map((el) => {
                return (
                <div className='mt-[45px]'>
                  <h1 className='text-[24px] font-bold'>{el.title}</h1>
                  <div className='flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] my-5 items-center'>
                    {products?.filter((res) => res?.categoryId == el.id).map((el) => (
                      <ProductCard decrease={decrease} increase={increase} addToCart={addToCart} {...el} />
                    ))}
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage