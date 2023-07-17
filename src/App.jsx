
import './App.css'
import Layout from './components/layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
 

  return <>
  <BrowserRouter>
<Routes>
  <Route path='/' element={ <Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
   
  </Route>

</Routes>
 
  </BrowserRouter> 
  </>
  
}

export default App

