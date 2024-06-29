import React from 'react'

import './Slider.css'
import SliderItem from './SliderItem/SliderItem'
import Slider1 from "./slide1.jpg"
import Slider2 from "./slide2.jpg"
import Slider3 from "./slide3.jpg"
import Slider4 from "./slide4.jpg"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay' 

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = ()=>{


  return(
    <div className="slider">
      <AutoplaySlider
        play
        cancelOnInteraction={false}
        interval={5000}
      >
        <div data-src={Slider1}>
        <SliderItem 
        title={"مجموعه ای از بهترین سخت افزار های روز"}
        boldtitle={"لپ تاپ و نوت بوک"}
        />
        </div>
        <div data-src={Slider2}>
        <SliderItem 
        title={"مجموعه ای از بهترین سخت افزار های روز"}
        boldtitle={"هدست و هندزفری"}
        />
        </div>
        <div data-src={Slider3}>
        <SliderItem 
        title={"مجموعه ای از بهترین سخت افزار های روز"}
        boldtitle={"کنسول بازی"}
        />
        </div>
        <div data-src={Slider4}>
        <SliderItem 
        title={"مجموعه ای از بهترین سخت افزار های روز"}
        boldtitle={"موبایل و لوازم جانبی"}
        />
        </div>
        </AutoplaySlider>
  </div>
  )
}




export default Slider
