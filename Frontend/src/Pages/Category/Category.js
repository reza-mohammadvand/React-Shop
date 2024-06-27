import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import SweetPagination from "sweetpagination";
import Wrapper from '../../Hoc/Wrapper';


import ShopItem from '../MainPage/Shop/ShopItem/ShopItem'
import {productListAction} from "../../Action/ProductAction"
import Loading from '../../Components/Loading/Loading'
import Path from '../../Components/Path/Path'
import FilterProduct from '../../Components/FilterProduct/FilterProduct';

const CategoryProducts = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const dispatch = useDispatch()

const productList =useSelector((state) => state.productList)

let {loading, products} = productList

 useEffect(()=>{

    dispatch(productListAction())

 },[dispatch])



 var Category = useParams(); 
 var Categoryaddres = useParams(); 


  switch(Category.id) {
    case "mobile":
      Category="موبایل"
    break;
    case "accessory":
      Category="لوازم جانبی"
    break;
    case "loptop":
      Category="لپ تاپ"
    break;
    case "usb-drive":
      Category="فلش مموری"
      break;
      case "air-pad":
        Category="ایرپاد"
        break;
        case "hard-disk":
          Category="هارد"
        break;  case "monitor":
        Category="مانیتور"
      break;  case "mobile":
    }   


    const productsItems = products?.filter((item)=>{
      if(item.category.includes(Category)){
       return item
      }
    })


 const [currentPageData, setCurrentPageData] = useState(new Array(0).fill());
  const items = productsItems?.map((item)=>{
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
    <Path address={Category} link={`/CategoryProducts/${Categoryaddres.id}`} />

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

export default CategoryProducts
