import React from 'react'
import { memo } from 'react'

function Testimonial() {
  return (
    <section className="section-vendor" id="testimonial">
      <h2>Testimonial</h2>
      <h5>Comments from your clients</h5>
    </section>
  )
}

export default memo(Testimonial)