import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios'

import "./BlogDetails.css"
import SideBar from '../../Components/SideBar/SideBar'
import { BlogDetailAction } from "../../Action/BlogAction";
import Loading from "../../Components/Loading/Loading"
import Path from '../../Components/Path/Path'
import Comments from '../../Components/Comments/Comments'

const BlogDetails = ({match}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch()

  const BlogDetail = useSelector((state)=> state.BlogDetail)
   let {loading,Blog} = BlogDetail

useEffect(()=>{

   dispatch(BlogDetailAction(match.params.id))

},[match,dispatch])


 var datasendComment = {
 name:"",
 comment:"",
 website:"",
 Email:"",
 }

 var postDataHandler = () => {
 
  axios.post('https://jsonplaceholder.typicode.com/posts', datasendComment)
    .then((response) => {
      console.log(response.status)
    })
}

    return (
        <div className="Blog-details">
           <div className='path'>
    <Path address={"صفحه اصلی"} link={"/"} />
    <Path address={"مقالات"} link={"/blog"} />
    <Path address={Blog.title} link={`/blogDetail/${Blog._id}`} />
  </div>
            <SideBar />
            { loading ? <Loading /> : ( 

            <div className="Blog-details-item">
    <div className="img">
      <img src={Blog.big_image} className="img-fluid" alt="" />
      <div className="date">
        <p>{Blog.data_day}</p>
        <p>{Blog.data}</p>
      </div>
    </div>
    <div className="item-top">
      <p><span> نوشته شده توسط</span> {Blog.author} </p>    
    </div>
    <div className="caption">
    <p className="title">{Blog.title}</p>
    <p>{Blog.text}</p>
      <div className="tags">
        <p className="ml-3">کلید واژه</p>
        {Blog.tags?.map((item)=>{
          return  <a href="/">{item}</a>

        })}
      </div>
  </div>
  <div className="comments">
    <p className='comments-title'>دیدگاه ها</p>
    {
      Blog.comments?.map((item)=>{
        return  <Comments name={item.name} img={item.img} text={item.text} date={item.date} />
      })
    }
    <div className="add">
      <p>ارسال نظرات</p>
      <form action="#">      
        <textarea onChange={(event) =>  datasendComment.comment = event.target.value } rows="10" placeholder="نظر خود را برای ما ارسال کنید ..."></textarea>
        <div className="input">
          
        <input onChange={(event) =>  datasendComment.name = event.target.value } type="text" required="" placeholder="نام*" />
      <input onChange={(event) =>  datasendComment.Email = event.target.value } type="email" required="" placeholder="ایمیل*" />
      <input onChange={(event) =>  datasendComment.website = event.target.value } type="text" placeholder="وب سایت" />
      <input onClick={postDataHandler}  type="submit" value=" ارسال" />
    </div>
      </form>
    </div>
    </div>
        </div>
            )}
        </div>
    )
}

export default BlogDetails
