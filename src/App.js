
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import Header from './component/Shared/Header/Header';
import Login from './component/Auth/Login/Login';
import NotFoundPage from './component/pages/NotFoundPage/NotFoundPage';
import MyItem from './component/pages/MyItem/MyItem';
import Signup from './component/Auth/Signup/Signup';
import RequireAuth from './component/Auth/RequireAuth/RequireAuth';
import ItemDetails from './component/pages/ItemDetails/ItemDetails';
import ManageInventory from './component/pages/ManageInventory/ManageInventory';
import AddItem from './component/pages/AddItem/AddItem';
import Blogs from './component/pages/Blogs/Blogs';
function App() {
  return (

    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
