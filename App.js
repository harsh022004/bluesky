import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ComponentsBluestar/header';
import Home from '../src/ComponentsBluestar/Home';
import Menus from '../src/ComponentsBluestar/Menus';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Items from '../src/ComponentsBluestar/Items'
import Categorie from './ComponentsBluestar/Categorie';
import Sup from './ComponentsBluestar/Sup';
import Sin from './ComponentsBluestar/Sin';
import About from './ComponentsBluestar/About Us';
import Footer from './ComponentsBluestar/Footer';


const allcategories = ['all', ...new Set(Items.map((Item) => Item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(Items)
  const [categories,setcategories] = useState(allcategories);

  const filterItems = (category) =>{
    if (category === 'all'){
      return setMenuItems(Items);
    }
      const newItems = Items.filter((item) => item.category === category)
      return setMenuItems(newItems)

  }
  
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Menus' element={
          <>
          <div className='V'>
         <div className='row'>
              <div className='row'>
         <div className='col-md-12'>
                  <h2 className='text-center py-5'>Our Menu</h2>
                  <Categorie filterItems={filterItems} categories={categories} />
                  <Menus data={menuItems} />
                  </div>
                  </div>
            </div>
            </div>
          </>}>
          </Route>
          <Route path='/Sup' element={<Sup/>}></Route>
          <Route path='/Sin' element={<Sin/>}></Route>
          <Route path='/About Us' element={<About Us/>}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
   
    </>

  );
}

export default App;
