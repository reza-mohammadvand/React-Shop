import axios from "axios"


export const BlogListAction = () => async (dispatch) => {
    try{
dispatch({type :'BLOG_LIST_REQUEST'})

 const {data} = await axios.get("http://localhost:8000/api/blogs")

dispatch({type:"BLOG_LIST_SUCCESS" , payload:data})
    }
    catch (error){
console.log(error)
    }
}

export const BlogDetailAction = (id) => async (dispatch) => {
    try{
dispatch({type :'BLOG_DETAIL_REQUEST'})

const {data} = await axios.get(`http://localhost:8000/api/blogs/${id}`)


dispatch({type:"BLOG_DETAIL_SUCCESS" , payload:data})
    }
    catch (error){
console.log(error)
    }
}