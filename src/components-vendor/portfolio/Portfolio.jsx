import React,{memo} from 'react'
import { useSelector } from 'react-redux'
import './portfolio.css'
function Portfolio() {
  const {about} = useSelector(state=>state?.about)
  return (
    <section className="section-vendor" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container-vendor portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={about?.image} alt="" /></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn-vendor' target='_blank' >Github</a>
          <a href="https://somelink.com" className='btn-vendor btn-primary' target='_blank' >Live Demo</a>
          </div>
          </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={about?.image} alt="" /></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn-vendor' target='_blank' >Github</a>
          <a href="https://somelink.com" className='btn-vendor btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={about?.image} alt="" /></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn-vendor' target='_blank' >Github</a>
          <a href="https://somelink.com" className='btn-vendor btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={about?.image} alt="" /></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn-vendor' target='_blank' >Github</a>
          <a href="https://somelink.com" className='btn-vendor btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default memo(Portfolio)