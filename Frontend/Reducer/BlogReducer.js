export const BlogListReducer = (state = {Blogs: []}, action) => {
    switch(action.type){
    
     case 'BLOG_LIST_REQUEST':
         return {loading:true, Blogs: []} 
    
     case "BLOG_LIST_SUCCESS":
         return{loading:false, Blogs:action.payload}
           
         default:
               return state
    }
    }
    
    export const BlogDetailReducer = (state = {Blog: {}}, action) => {
        switch(action.type){
            
         case 'BLOG_DETAIL_REQUEST':
             return {loading:true, ...state} 
        
         case "BLOG_DETAIL_SUCCESS":
             return{loading:false, Blog:action.payload}
               
             default:
                   return state
        }
        }