import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import Header from './component/Shared/Header/Header';
import NotFoundPage from './component/pages/NotFoundPage/NotFoundPage';

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
