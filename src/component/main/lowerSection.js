import image1 from '../../images/image-about-dark.jpg';
import image2 from '../../images/image-about-light.jpg'

export default function LowerSection(){
  return(
    <section className="main_lowerSection">
      <div className='main_lowerSection_imageDiv'>
        <img alt='about-dark' className='about-img' src={image1} />
      </div>
      <div className='main_lowerSection_infoDiv'>
        <h2 className='main_lowerSection_infoDiv-header'>About our furniture</h2>
        <p className='main_lowerSection_infoDiv-para'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <div className='main_lowerSection_imageDiv'>
        <img alt='about-dark' className='about-img' src={image2} />
      </div>
    </section>
  )
}