import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"


import "./SideBar.css"
import {productListAction} from "../../Action/ProductAction"

const SideBar = (props) => {

  const dispatch = useDispatch()

   const productList =useSelector((state) => state.productList)
let {loadingproducts,products} = productList

products = products.slice(0,3)

useEffect(()=>{
  dispatch(productListAction())
},[dispatch])


let categorys = ["فلش مموری","لوازم جانبی","لپ تاپ","ایرپاد","موبایل","هارد","مانیتور"]

let Archives = [{month:"فروردین",count:"24"},
{month:"اردیبهشت",count:"42"},
{month:"خرداد",count:"9"},
{month:"تیر",count:"15"},
{month:"مرداد",count:"23"},
{month:"شهریور",count:"81"},
{month:"آبان",count:"34"},
{month:"آذر",count:"20"}]


let tags=["امنیت سایبری","هارد","شبکه","نرم افزار","لوازم جانبی","فلش مموری","لپ تاپ"]



    return (

        <div className="sidbar order-1 order-sm-0">
  <ul className="category">
    <li className="sidebar-title">دسته بندی</li>
    {categorys.map((item)=>{
         return <li><a href="/">{item}</a></li>
    })}
  </ul>
<div className='product-important'>
  <ul>
    <li className="sidebar-title">محصولات </li>
  </ul>
  {products.map((item)=>{
    return (
      <div className='product-important-item'>
  <img src={item.image} />
  <div className='caption'>
      <Link to={`/product/${item._id}`}>{item.name}</Link>
      <div className='caption-price'>
       <p className={item.discount!=0 ? "price-discount" : "price"}>{item.price}</p>
      <p className={item.discount!=0 ? "price-discount" : "price"}>{Math.ceil(((item.price/100)*(100-item.discount))/1000)*1000}</p>
      </div>
  </div>
</div>
    )
  })}

</div>

    <ul className="archive">
      <li className="sidebar-title">آرشیو </li>
      {Archives.map((item)=>{
            return  <li><Link to="/"><span>{item.month}</span><span>({item.count})</span></Link></li>
      })}
    </ul>
    <div className="tags">
      <p className="sidebar-title">کللید واژه</p>
      {tags.map((item)=>{
            return  <Link to="/">{item}</Link>
      })}
    </div>
  </div>
    )
}

export default SideBar
