import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import 'react-web-tabs/dist/react-web-tabs.css';
import "./Product.css"
import ShopItem from '../MainPage/Shop/ShopItem/ShopItem';
import { productDetailAction } from "../../Action/ProductAction";
import {productListAction} from "../../Action/ProductAction"
import Loading from "../../Components/Loading/Loading"
import Path from '../../Components/Path/Path';
import Comments from '../../Components/Comments/Comments';

const Product = ({match,history}) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const dispatch = useDispatch()

   const productDetail = useSelector((state)=> state.productDetail)
    let {loading,product} = productDetail

    const productList =useSelector((state) => state.productList)
let {loadingproducts,products} = productList

products = products.slice(0,8)



useEffect(()=>{

    dispatch(productDetailAction(match.params.id))
    dispatch(productListAction())

},[match,dispatch])


const addTOCartHandler = ()=>{

history.push(`/cart/${match.params.id}`)

}

 const increase = ()=>{
let count= document.getElementById("count-product-details").value;
count = parseInt(count);
document.getElementById("count-product-details").value=count+1 ;
}

 const decrease = ()=>{
   if(document.getElementById("count-product-details").value !== 1){

    let count= document.getElementById("count-product-details").value;
    count = parseInt(count);
    document.getElementById("count-product-details").value=count-1 ;     
  }
 }


 let isdiscount="no"
 let showDiscount = false

 if (product.discount!==0) {
isdiscount="yes"
showDiscount = true
 }


   var size = product.size
   var sizeItem = size?.map((item)=>{       
    return( <div> <input type="radio" name="size" id={item} />
       <label for={item}>{item}</label>
       </div>
    )
   })


   var color = product.color

   var colorItem= color?.map((item)=>{
    var id=null;
switch(item) {
case "قرمز":
id="red"
break;
case "آبی":
id="blue"
break;
case "سبز":
id="green"
break;
case "زرد":
  id="yrllow"
  break;
  case "سفید":
    id="white"
    break;
}          
   return( <div> <input type="radio" name="color" id={id} />
      <label for={id}>{item}</label>
      </div>
   )
  })
  

    return (
        <div className="product-details">
            <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"فروشگاه"} link={"/shop"} />
    <Path address={product.name} link={`/product/${product._id}`} />

  </div>
        { loading ? <Loading /> : ( 
            <div>      
    <div className="product-item-details order-1 order-md-0">
      <p className="product-title">{product.name}<span style={{display : showDiscount ? "block" : "none"}}>{product.discount}%</span></p>
      <div className="price">
      قیمت :<p className={`product-${isdiscount}-discount`}>  {product.price}</p>
<p className={`product-${isdiscount}-discount`}>{Math.ceil(((product.price/100)*(100-product.discount))/1000)*1000}</p>
</div>
      <p className="product-description">{product.short_description}</p>
      <div className="product-size">
        <p>سایز : </p>
        <div className="d-flex">
          {sizeItem}
              </div>
      </div>
      <div className="product-color">
        <p>رنگ : </p>
        {colorItem}
      </div>
      <div className="product-count">
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="text-muted btn-outline-none" type="button" onClick={increase}>+</button>
          </div>
          <input type="text" id="count-product-details" readOnly className="form-control py-4" value="1" />
          <div className="input-group-append ">
            <button className="text-muted btn-outline-none"  type="button" onClick={decrease}>-</button>
          </div>
      </div>
      <div className="product-add">
        <input type="button" onClick={addTOCartHandler} value="افزودن به سبد خرید" />
      </div>      
      </div>
            <div className="social">
     <a href="/"><i className="fab fa-telegram-plane"></i></a>
      <a href="/"><i className="fab fa-instagram"></i></a>
      <a href="/"><i className="fab fa-facebook"></i></a>
      <a href="/"><i className="fab fa-twitter"></i></a>
  </div>
</div>
<div>


      <div className="product-item-gallery order-0 order-md-1">
      <Carousel showIndicators={false} emulateTouch={true} infiniteLoop={true} showArrows={false}>
        {
           product.gallery?.map((item)=>{
            return (
              <div>
                    <img src={item} />
                </div>
            )
})
        }
               
            </Carousel>
                        </div>
</div>


<div className="description-product">
<p className="title-description-product">معرفی محصول</p>
<div className="description-product-text">
<Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">معرفی </Tab>
          <Tab tabFor="two">مشخصات</Tab>
          <Tab tabFor="three">نظرات</Tab>
        </TabList>
        <TabPanel tabId="one">
          <p>{product.long_description}</p>
        </TabPanel>
        <TabPanel tabId="two">
          <div className='description-product-features'>
            {
              product.features?.map((item)=>{
                return(
                  <div className='features-item'>
                    <p>{item.item}</p>
                    <p>{item.value}</p>
                  </div>
                )
              })
            }
          </div>
        </TabPanel>
        <TabPanel tabId="three">
        {
      product.comments?.map((item)=>{
        return  <Comments name={item.name} img={item.img} text={item.text} date={item.date} />
      })
    }
        </TabPanel>
      </Tabs>
</div>
</div>

<div className="similar-product">
<p className="title-similar-product">محصولات مشابه</p>
<div className="similar-product-items">

<Slider
    infinite= {true}
    speed ={500}
    slidesToShow= {4}
    slidesToScroll= {1} >
{
           products.map((item)=>{
            return (
              <div>
                  <ShopItem 
                  key={item._id}
                  product={item}       
                  /> </div>
            )
          })
        }

    </Slider>

</div>
</div>
        </div> 

        )
        }
                </div>

    )
}

export default Product
