import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SignInPage from './Components/SignInPage';
import { NavigationBar } from './Components/NavigationBar';
// import { Home } from './Components/Home';
// import { About } from './Components/About';
// import { Contact } from './Components/Contact';
// import { Register } from './Components/Register';
import GoogleSignIn from './Components/GoogleSignIn';

function App() {
  return (
 
   <BrowserRouter>
     <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<GoogleSignIn/>}></Route>
            {/* <Route path='/' element={<SignInPage/>}></Route> */}

         {/* <Route path='/about' element={<About/>}></Route>
  //       <Route path='/contact' element={<Contact/>}></Route>
  //       <Route path='/register' element={<Register/>}></Route> */}
      </Routes>

  </BrowserRouter>
  );
}

export default App;
