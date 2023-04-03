import React,{memo} from 'react'
import './experience.css'
 

function Experience() {
  return (
    <section className="section-vendor" id="experience">
      
      <h5>What is your speciality?</h5>
      <h2>Experience</h2>
      <div className="container-vendor experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>React Js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Express Js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <i class="uil uil-check-circle experience__details-icon"></i>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Experience)