import React , {useState} from 'react'
import './Header.scss'
import Menu from './Menu';
import { Link, NavLink } from 'react-router-dom'
import {Button} from "react-bootstrap"
import {landing} from '../../constant/_navItems';
import Logo from '../../assets/logo/logo.png'


function Header() {

    const [ show , setShow ] = useState(false)
    return (
        <React.Fragment>
          <header className="Landing-Header shadow position-relative w-100 d-flex align-items-center justify-content-between bg-lg-white p-3 col-gap-3">
            <button
              onClick={() => setShow(true)}
              className="bi bi-list fs-1 d-flex fle-center d-lg-none text-primary"
            />
            
            
            <nav className="flex-1 d-none d-lg-block">
              <ul className="d-flex align-items-center col-gap-3">
                <Link   className='font-fa fs-20 nav-li mx-1' to="/"><li key="logo"> <img width="60" height="60" src={Logo} alt='logo' /> </li></Link>
                {landing.map((i , index)=>
                  <Link key={index}  className='font-fa fs-20 nav-li mx-1' to={i.path}><li key={i.path}> {i.label} </li></Link>
                )}
              </ul>
            </nav>
            <div className="user-control d-none d-lg-flex flex-center col-gap-3">
            <Link to="login" className="btn btn-outline-black font-fa fs-15">ورود</Link>
            </div>
          </header>
          <Menu  show={show} onHide={setShow} />
        </React.Fragment>
      );
}

export default Header