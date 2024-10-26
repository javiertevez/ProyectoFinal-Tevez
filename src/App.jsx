
import './App.css';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/homeView/HomeView';
import MonitoresView from './views/MonitoresView/MonitoresView'
import PlacasView from './views/PlacasView/PlacasView'
import MicrofonosView from './views/MicrofonosView/MicrofonosView'
import { ProductsProvider } from './context/ProductContext.jsx';
import CardDetail from './componentes/CardDetail.jsx';
import DetailView from './views/DetailView/DetailView.jsx';
import CartView from './views/CartView/CartView.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ChekOutView from './views/ChekOutView/ChekOutView.jsx';

function App() {


  return (


    <BrowserRouter>

      <ProductsProvider>
        <CartProvider>

          <NavBar />
          <Routes>

            <Route exact path='/' element={<HomeView />} />
            <Route exact path='/:productName' element={<DetailView />} />

            <Route exact path='/cart' element={<CartView />} />
            <Route exact path='/cart/chekout' element={<ChekOutView />} />
            <Route exact path='/cart/chekout/:end' element={<ChekOutView />} />

            <Route exact path='/monitores/:productName' element={<DetailView />} />
            <Route exact path='/monitores/' element={<MonitoresView />} />

            <Route exact path='/placas/:productName' element={<DetailView />} />
            <Route exact path='/placas/' element={<PlacasView />} />

            <Route exact path='/microfonos/:productName' element={<DetailView />} />
            <Route exact path='/microfonos/' element={<MicrofonosView />} />

            
          </Routes>

        </CartProvider>

      </ProductsProvider>
    </BrowserRouter>





  )
}

export default App

