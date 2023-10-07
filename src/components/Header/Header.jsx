import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">

        
<Link >Home</Link>
<Link >Education</Link>
<Link >Testimonials</Link>
<Link >About</Link>
<Link >Client Feedbacks</Link>



    </nav>
  )
}

export default Header