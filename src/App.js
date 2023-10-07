import './App.css';
import ProductList from './components/produtList';
import CounterContainer from './components/counterContainer';
import ToDo from './components/todo';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Register from './components/register';
import UserList from './components/users/userList';
import UserDetails from './components/users/userDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Navigation />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/userlist' element={<UserList />}></Route>
        <Route path='/todo' element={<><CounterContainer /><ToDo /></>}></Route>
        <Route path='/productlist' element={<ProductList />}></Route>
        <Route path='/userdetails/:id' element={<UserDetails />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
