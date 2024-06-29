import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import SweetPagination from "sweetpagination";
import Wrapper from '../../Hoc/Wrapper';


import "./Shop.css"
import ShopItem from '../MainPage/Shop/ShopItem/ShopItem'
import {productListAction} from "../../Action/ProductAction"
import Loading from '../../Components/Loading/Loading'
import Path from '../../Components/Path/Path'
import FilterProduct from '../../Components/FilterProduct/FilterProduct';

const Shop = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

    const dispatch = useDispatch()

const productList =useSelector((state) => state.productList)

let {loading, products} = productList

 useEffect(()=>{

    dispatch(productListAction())

 },[dispatch])



 const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const items = products.map((item)=>{
    return(
          <ShopItem 
          key={item._id}
 product={item}
/> 
    )
})



    return (
            <div className="products products-shop">
                <div className="pages-header pages-header-shop">
      <div></div>
    <p>فروشگاه</p>
  </div>
  <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"فروشگاه"} link={"/shop"} />
  </div>
  <FilterProduct />
  <div className="Shop-Items">

      {currentPageData.map((item) => (
        <Wrapper>
                    {item}
        </Wrapper>
      ))}
            { loading ? <Loading /> :

      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={12}
        getData={items}
        navigation={true}
      />  
            
         }

         </div>
        </div>
    )
}

export default Shop
