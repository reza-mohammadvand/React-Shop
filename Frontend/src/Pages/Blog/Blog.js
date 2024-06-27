import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import SweetPagination from "sweetpagination";
import Wrapper from '../../Hoc/Wrapper';


import Path from '../../Components/Path/Path'
import "./Blog.css"
import SideBar from '../../Components/SideBar/SideBar'
import BlogItem from './BlogItem/BlogItem'
import {BlogListAction} from "../../Action/BlogAction"
import Loading from '../../Components/Loading/Loading'



const Blog = () => {

  const dispatch = useDispatch()

  const BlogList =useSelector((state) => state.BlogList)
  
  let {loading, Blogs} = BlogList
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   useEffect(()=>{
  
      dispatch(BlogListAction())
  
   },[dispatch])



   const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
   const items = Blogs.map((item)=>{
     return(
      <BlogItem 
      key={item._id}
      _id={item._id}
      img={item.big_image}
      title={item.title}
      short_text={item.short_text}
      data_day={item.data_day}
      data={item.data}
      author={item.author}
      />
     )
 })


    return (
        <div className="Blog-list">
          <div className="pages-header pages-header-blog">
      <div></div>
    <p>مقالات</p>
  </div>
  <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"مقالات"} link={"/blog"} />
  </div>
  <div className="Blog-list-Items">
             <SideBar />
            <div className="blog-list-items">

            {currentPageData.map((item) => (
        <Wrapper>
                    {item}
        </Wrapper>
      ))}
            { loading ? <Loading /> :
           <SweetPagination
           currentPageData={setCurrentPageData}
           dataPerPage={3}
           getData={items}
           navigation={true}
         />  
         }
            </div>
          </div>
        </div>
    )
}

export default Blog
