import React,{useEffect} from "react"


import "./MainPage.css"
import Wrapper from "../../Hoc/Wrapper"
import Slider from "./Slider/Slider" 
import Category from "./Category/Category"
import Suggest from "./main_suggest/suggest"
import Blog from "./Blog/Blog"
import FeatureSupport from "./FeatureSupport/FeatureSupport"
import Shop from "./Shop/Shop"

const MainPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
       <Wrapper>
      
           <Slider />
<Category />
<Shop />
<Suggest />
<Blog />
<FeatureSupport />
       </Wrapper>
    )
}

export default MainPage
