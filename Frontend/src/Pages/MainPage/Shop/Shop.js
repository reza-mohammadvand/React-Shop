import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"

import "./Shop.css"
import ShopItem from './ShopItem/ShopItem'
import {productListAction} from "../../../Action/ProductAction"
import Loading from '../../../Components/Loading/Loading'

const Shop = () => {

const dispatch = useDispatch()

const productList =useSelector((state) => state.productList)

let {loading, products} = productList

products = products.slice(0,12)

 useEffect(()=>{

    dispatch(productListAction())

 },[dispatch])




    return (
        <div className="products">
  <div><p className="title-new-product">جدیدترین محصولات</p></div>
            { loading ? <Loading /> :
                products.map((item)=>{
                    return(
                          <ShopItem 
                          key={item._id}
                          product={item}
                          
         /> 
                    )
                })
            
         }
        </div>
    )
}

export default Shop
