import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';


export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  useEffect(()=> {
    const handleclick = () =>{
        menuRef.current.classList.toggle("active");
    }

    handleclick();
  }, [menu])
  return (
    <header className="header">
        <Link to="/" title="logo" className="logo">
            <h2>Blog</h2>
        </Link>
        <nav className="nav">
            <ul className="menu" ref={menuRef}>
                <li>
                    <Link to="/" title="Home">Home</Link>
                </li>
                <li>
                    <Link to="/post" className="post" title="New Post">New Post</Link>
                </li>
            </ul>

            <button 
                type="button" 
                className="btnMenu"
                onClick={()=> setMenu((anterior)=> !anterior)}
            >
                <BiMenuAltRight/>
            </button>
        </nav>
    </header>
  )
}
