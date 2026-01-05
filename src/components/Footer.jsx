import React, { memo , useContext} from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/ChangeLanguage';

const Footer = () => {

  const {lan} = useContext(LanguageContext)
  return (
    <footer className=' bg-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between gap-5 flex-wrap'>
        <ul className='text-[18px]'> <Link className='flex gap-1' to={"/"}><img className='w-[35px]' src='./img/Group 2.svg' alt='logo' />Kuda Pizza</Link></ul>
        <ul className='flex flex-col gap-2 text-[18px]'>
          <li className='text-[22px] font-bold'>{lan.footer_title}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title1}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title2}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title3}</li>
        </ul>
        <ul className='flex flex-col gap-2 text-[18px]'>
          <li className='text-[22px]  font-bold'>{lan.footer_title4}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title5}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title6}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title7}</li>
          <li className='hover:text-orange-500 cursor-pointer transition duration-150' >{lan.footer_title8}</li>
        </ul>
        <ul className='flex flex-col gap-2 text-[18px]'>
          <li className='text-[22px]  font-bold'>{lan.footer_title9}</li>
          <li className='flex gap-1'><img className='w-[20px]' src='./img/Group 55.svg' alt='t'/>+7 (926) 223-10-11</li>
          <li className='flex gap-1'><img className='w-[15px]' src='./img/Group 5.svg' alt='t' />{lan.footer_title10}</li>
          <div className='flex gap-2'>
            <li className='flex gap-1 hover:text-orange-500 cursor-pointer transition duration-150'><img className='w-[15px]' src='./img/Subtract.svg' alt='t' />Facebook</li>
            <li className='flex gap-1  hover:text-orange-500 cursor-pointer transition duration-150'><img className='w-[15px]' src='./img/Vector.svg' alt='t' />Instagram</li>
          </div>
        </ul>
      </div>
    </footer>
  )
}
const FooterMemo = memo(Footer)
export default FooterMemo