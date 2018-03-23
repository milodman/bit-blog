import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <nav className="#0288d1 light-blue darken-2">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">RND BLOG</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/author'>Authors</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header