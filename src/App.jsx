import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
const KorzinaPage = React.lazy(() => import('./pages/korzina/KorzinaPage'))
const HomePage = React.lazy(() => import('./pages/home/HomePage'))


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/korzina' element={<KorzinaPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App