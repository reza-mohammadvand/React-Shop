import React,{useState} from 'react';
import {BrowserRouter as Router ,Route} from "react-router-dom"
import BackToTop from "react-back-to-top-button"

//   --legacy-peer-deps for install packeges

import './App.css';
import Wrapper from "./Hoc/Wrapper"
import MainPage from "./Pages/MainPage/MainPage"
import Product from './Pages/Product/Product';
import Blog from './Pages/Blog/Blog';
import Contact_us from "./Pages/Contact-us/Contact-us"
import About_us from "./Pages/About-us/About-us"
import Cart from "./Pages/Cart/Cart"
import Shop from './Pages/Shop/Shop';
import GoTop from "./Components/GoTop/GoTop"
import Header from "./Components/header/Header"
import LoginForm from "./Components/header/LoginForm/LoginForm"
import BackDrop from "./Components/header/BackDrop/BackDrop"
import Footer from "./Components/Footer/Footer"
import BlogDetails from './Pages/Blog-details/BlogDetails';
import CheckOut from './Pages/CheckOut/CheckOut';
import CategoryProducts from './Pages/Category/Category';


function App() {

  const[LoginFormShow,setLoginFormShow] = useState(false);
  const[ShowRegister,setShowRegister] = useState(false);

  let loginForm =null;
  let BaackDrop = null
  
  if(LoginFormShow){
      loginForm = "LoginFormShow";
          BaackDrop="LoginFormShow";
  }

  if(ShowRegister){
    BaackDrop="LoginFormShow";
  }




  const [isActive, setIsActive] = useState("ScrollFalse");
  const [isActive100, setIsActive100] = useState("ScrollFalse100");
  const [marginTop, setMarginTop] = useState("");



 window.onscroll = function() {myFunction()};
  function myFunction() {
    if (window.scrollY > 300) {
             setIsActive("ScrollTrue")
    } 
    if (window.scrollY > 150){
      setIsActive100("ScrollTrue100")
      setMarginTop("marginMain")
    }
    
    else {
      setIsActive("ScrollFalse")
      setIsActive100("ScrollFalse100")
      setMarginTop("")

    }
  }


  
  return (
    <Router>
    <Wrapper>
    
    <BackToTop showAt={300} speed={100} easing="easeInOutQuint">
       <GoTop />
           </BackToTop>
           <BackDrop className={BaackDrop} Click={()=> {setLoginFormShow(false);setShowRegister(false)}} />
           <LoginForm className={loginForm} 
           hideregister={()=> {setLoginFormShow(true);setShowRegister(false)}} 
           ShowRegister={ShowRegister} 
           ShowRegisterbutton={()=> {setLoginFormShow(false);setShowRegister(true)}} />
           <Header isActive100={isActive100} isActive={isActive}  Click={()=>setLoginFormShow(true)} />
      <div className={`main ${marginTop}`}>
        <Route path="/" component={MainPage} exact />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id" component={Cart} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact-us" component={Contact_us} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogDetail/:id" component={BlogDetails} />
        <Route path="/about-us" component={About_us} /> 
        <Route path="/Check-Out" component={CheckOut} />  
        <Route path="/CategoryProducts/:id" component={CategoryProducts} />
   
        <Footer />
      </div>
    </Wrapper>
    </Router>
  )
}

export default App;
