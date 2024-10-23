import { useEffect, useState } from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'

import Layout from './layouts/Layout/Layout'
import Home from './layouts/pages/Home/Home'
import Calculator from './layouts/pages/Calculator/Calculator'
import Ball from './layouts/pages/Ball/Ball'
import Component from './layouts/pages/Component/Component'
import Todo from './layouts/pages/Todo/Todo'
import Products from './layouts/pages/Products/Products'
import Carts from './layouts/pages/Carts/Carts'
import Login from './layouts/pages/Login/Login'

import { fetchProducts } from './data/products'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')
  const [tab, setTab] = useState('')
  
  useEffect(() => {
    setProducts(fetchProducts())
    setTab('home')
  }, [])

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} /> 
  }
  else {
    return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route element={<Layout tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken} />}> 
              <Route path={"/"} element={<Home/>} />
              <Route path={"/login"} element={<Login setToken={setToken} setRole={setRole}/>} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route path={"/calculator"} element={<Calculator />} />
              <Route path={"/ball"} element={<Ball />} />
              <Route path={"/component"} element={< Component />} />
              <Route path={"/products"} element={<Products products={products} carts={carts} setCarts={setCarts}/>} />
              <Route path={"/carts"}element={<Carts carts={carts} setCarts={setCarts}/>} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
  )
  }   
}

export default App
