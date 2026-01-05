import React, { memo , useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../context/ChangeLanguage';
import { CartContext } from '../context/ChangeCart';

const Header = () => {
  
  const {lang , setLang , lan} = useContext(LanguageContext);
  const {cart} = useContext(CartContext);

  return (
    <header className='fixed top-0 w-full py-5 bg-gray-100 z-10'>
      <div className='container mx-auto px-15 flex items-center justify-between'>
        <Link className='flex gap-1' to = {"/"}><img src='./img/Group 2.svg' alt='logo' />Kuda Pizza</Link>
        <ul className='flex gap-1'>
          <li>
            <NavLink to={"/korzina"}> <button className='flex bg-orange-600 px-3 py-2 gap-1 text-white rounded'><img src='./img/Shopping bag.svg' alt='korzina' /><span>{cart.length} </span>₽</button></NavLink>
          </li>
          
          <li>
            <select onChange={(e) => setLang(e.target.value)} className='flex bg-orange-600 px-3 py-2 gap-1 text-white rounded'>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="eng">Eng </option>
            </select>
          </li>
        </ul>
      </div>

    </header>
  )
}
const HeaderMemo = memo(Header);
export default HeaderMemo