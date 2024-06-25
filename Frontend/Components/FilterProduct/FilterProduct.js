import React from 'react'
import { useRanger } from "react-ranger";

import "./FilterProduct.css"




const FilterProduct = () => {

    const [values, setValues] = React.useState([0,5000000]);

    const { getTrackProps, handles } = useRanger({
        min: 0,
        max: 5000000,
        stepSize: 50000,
        values,
        onDrag: setValues
      });

    let tags=["امنیت سایبری","هارد","شبکه","نرم افزار","لوازم جانبی","فلش مموری","لپ تاپ"]

    var color = ["قرمز","سفید","سبز","آبی","زرد","مشکی"]

    var pricesFilter = ["0 - 200000","200000 - 500000","500000 - 1000000","1000000 - 5000000",">= 5000000"]


    var colorItem = color?.map((item)=>{
     var id=null;
 switch(item) {
 case "قرمز":
 id="red"
 break;
 case "آبی":
 id="blue"
 break;
 case "سبز":
 id="green"
 break;
 case "زرد":
   id="yrllow"
   break;
   case "سفید":
     id="white"
     break;
     case "مشکی":
     id="black"
     break;
     default:
    break;
      
 }        

    return( <div> <input type="checkbox" name="color" id={id} />
       <label for={id}>{item}</label>
       </div>
    )
   })

  return (
        <div className="filters-item">
          <div className="sort">
            <p>مرتب کردن بر اساس :</p>
            <ul>
                <li>
                  <input type="radio" name="sort" id="Default" />
                <label for="Default">پیشفرض</label>
              </li>
              <li>
                <input type="radio" name="sort" id="Popularity" />
                <label for="Popularity">پربازدید ترین ها</label>
              </li>
              <li>
                <input type="radio" name="sort" id="availible" />
                <label for="availible">کالاهای موجود</label>
              </li>
              <li>
                <input type="radio" name="sort" id="New" />
                <label for="New">جدیدترین ها</label>
              </li>
              <li>
                <input type="radio" name="sort" id="price-low" />
                <label for="price-low">کمترین قیمت</label>
              </li>
              <li>
                <input type="radio" name="sort" id="price-hight" />
                <label for="price-hight">بیشترین قیمت</label>
              </li>
            </ul>
          </div>
          <div className="price">
            <p>قیمت :</p>
            <ul>
              {pricesFilter.map((item,c)=>{
return(
  <li>
                  <input type="radio" name="price" id={item.trim()} />
                <label for={item.trim()}>{item}</label>
              </li>
)
              })}
           
                <div className="slider-price">    
                <div
        {...getTrackProps({
          style: {
            height: "9px",
            background: "#e1e1e1",
            borderRadius: "15px",
            width:"100%"
          }
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: "14px",
                height: "14px",
                outline: "none",
                borderRadius: "100%",
                background: "#717fe0",
                border: "none"
              }
            })}
          />
        ))}
      </div>
   
      <pre className='show-price'>
          {`${values[1]} - ${values[0]}`}
      </pre>
                </div>
            </ul>
          </div>
          <div className="color">
            <p>رنگ :</p>
          {colorItem}
          </div>
          <div className="tags">
            <p>کلید واژه :</p>
            {tags.map((item)=>{
            return  <a href="/">{item}</a>
      })}
          </div>
        </div>
        )
}

export default FilterProduct