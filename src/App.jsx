
import './App.css'
import Layout from './components/layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import Login from "./pages/login";
import ShopContext from './components/shopcontext'


function App() {
 
  return <>
  <ShopContext>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={ <Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='wishlist' element={<Wishlist/>}/>
    <Route path='login' element={<Login/>}/>
  </Route>

</Routes>
 
  </BrowserRouter>
  </ShopContext>
  
  </>
  
}

export default App

