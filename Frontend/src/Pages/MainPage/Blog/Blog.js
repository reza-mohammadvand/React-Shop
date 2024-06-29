import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"

import "./Blog.css"
import BlogItem from './BlogItem/BlogItem'
import {BlogListAction} from "../../../Action/BlogAction"
import Loading from '../../../Components/Loading/Loading'

const Blog = () => {
   const dispatch = useDispatch()

   const BlogList =useSelector((state) => state.BlogList)
   
   let {loading, Blogs} = BlogList

   Blogs = Blogs.slice(0,3)

   
    useEffect(()=>{
   
       dispatch(BlogListAction())
   
    },[dispatch])


    return (
        <div className="blog">
             <div><p className="title-blog">جدیدترین مقالات</p></div>
    
             { loading ? <Loading /> :
                Blogs.map((item)=>{
                    return(
                      <BlogItem 
                      key={item._id}
                      _id={item._id}
                      img={item.image}
                      title={item.title}
                      minText={item.short_text}
                      data_day={item.data_day}
                      data={item.data}
                      author={item.author}
                      />
                    )
                })
         }
 
      </div>
    )
}

export default Blog
