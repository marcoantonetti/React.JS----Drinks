import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ItemsCatalogo/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemsCatalogo/ItemDetail/itemDetailContainer';
import { useParams } from 'react-router';

function App() {

  return (
      <BrowserRouter>
      <div className='App'>

      <NavBar/>
      <Routes>

      <Route exact path='/' element={<ItemListConteiner bienvenida='Nuestro Catalogo'/>}/>
      <Route exact path='/subcategoria/:subcategoryID' element={<ItemListConteiner />}/>
      <Route exact path='/categoria/:categoryID' element={<ItemListConteiner />}/>
      <Route exact path='/detail/:id' element={<ItemDetailContainer/>}/>
      <Route exact path='/cart/' />



      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App;
