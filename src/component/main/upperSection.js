import IconArrowRight from "../svg/iconRight"
import { ArrowLeft, ArrowRight } from "../svg/arrowIcon"
import { gsap, Power3 } from "gsap";
import React from "react";
import Data from "./Data";
import { nanoid } from "nanoid";


export default function UpperSection(){
  const [index, setIndex] = React.useState(0);
  const el = React.useRef();
  const data = Data

  const slides = data.map(each => {
    return <Slider 
                header = {each.header}
                para = {each.para}
                key = {nanoid()}
                 />
  })
 

  React.useEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.from(q('.ani1'), {duration:1, y:50, scale:0, opacity: 0, stagger: 0.6})
    gsap.to(q('.ani1'), {duration:1, y:0, scale:1, opacity:1, stagger: 0.6, ease: Power3.easeInOut})
  }, [])

  function setindex(method){
    if(method === 'inc'){
      setIndex(previndex => previndex === 2 ? 2 : previndex + 1)
    }else if(method === 'dec'){
      setIndex(previndex => previndex === 0 ? 0 : previndex -1)
    }
  }
  return(
    <section className="main_upperSection">
      <div className="main_upperSection_images">
        <div className="slideshow">
          <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
            <div className="slide bg-1"></div>
            <div className="slide bg-2"></div>
            <div className="slide bg-3"></div>
          </div>
        </div>
        <div className="slideshow-controls">
        <ArrowLeft 
          setindex = {setindex}
        />
        <ArrowRight 
          setindex = {setindex}
        />
        </div>
      </div>
      <div className="main_upperSection_infoDiv" ref={el}>
        <div className="main_upperSection_infoDiv_container">
         <div className="slideshow">
          <div className="slideshowSlider " style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {slides}
          </div>
         </div>
          <button className="main_upperSection_infoDiv_container-btn ani1">Shop now <IconArrowRight /></button>
        </div>
      </div>
    </section>
  )
}

function Slider(props){
  return(
    <div className="slide">
      <h1 className="slide-header anil">{props.header}</h1>
      <p className="slide-para anil">{props.para}</p>
    </div>
  )
}