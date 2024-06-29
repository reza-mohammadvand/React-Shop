import React from 'react'

import "./Category.css"
import CategoryItem from './CategoryItem/CategoryItem'
import Category1 from "./Category1.jpg"
import Category2 from "./Category2.jpg"
import Category3 from "./Category3.jpg"


const Category = () => {
    return (
        <div className="category">
       <CategoryItem img={Category1} Link={"/shop"} title={"کابل"} description={"پرسرعت ترین کابل های شبکه"} />
       <CategoryItem img={Category2} Link={"/shop"} title={"فلش مموری"} description={"در حجم های مختلف"} />
       <CategoryItem img={Category3} Link={"/shop"} title={"هندزفری"} description={"جدیدترین هدست ها"} />
        </div>
    )
}

export default Category
