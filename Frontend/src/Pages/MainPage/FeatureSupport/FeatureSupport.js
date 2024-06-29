import React from 'react'

import "./FeatureSupport.css"
import FeatureSupportItem from './FeatureSupportItem/FeatureSupportItem'

import image1 from "./image1.png"
import image2 from "./image2.png"
import image3 from "./image3.png"
import image4 from "./image4.png"
import image5 from "./image5.png"



const FeatureSupport = () => {
    return (
        <div className="info wow animated fadeInUp">
<FeatureSupportItem src={image1} title={"امکان پرداخت در محل"} />
<FeatureSupportItem src={image2} title={"هفت روز ضمانت بازگشت کالا"} />
<FeatureSupportItem src={image3} title={"اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"} />
<FeatureSupportItem src={image4} title={"۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"} />
<FeatureSupportItem src={image5} title={"ﺿﻤﺎﻧﺖ اصالت ﮐﺎﻟﺎ"} />
</div>
    )
}

export default FeatureSupport
