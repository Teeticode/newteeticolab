import React,{memo} from 'react'

function Social() {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>
        <a href="https://github.com" className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
        </a>
        <a href="https://twitter.com" className="home__social-icon" target="_blank">
            <i className="uil uil-twitter"></i>
        </a>
    </div>
  )
}

export default memo(Social)