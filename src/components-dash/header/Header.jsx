import React,{memo,useState} from "react";
import './header.css';
import '../../App.css'
import Account from "../../components/Account/Account";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-store/auth/AuthSlice";
import { BarLoader } from "react-spinners";
function Header({isDark,setIsDark}){
    const [tokenStatus, setToken] = useState()
    const dispatch = useDispatch();
    const {token} = useSelector(state=>state.auth)
    const [toggle, setToggle] = useState(false)
    const {loadingUser} = useSelector(state=>state.user)
    const {loading} = useSelector(state=>state.about)
    return(
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">DASHBOARD</a>
                <div className={toggle?"nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#feedback" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> FeedBack
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            {token?(
                              <a href="#portfolio" onClick={()=>{dispatch(logout())}} className="nav__link">
                              <i className="uil uil-signout nav__icon"></i> Logout
                          </a>  
                            )
                            :(
                                <Account/>
                            )
                            }
                                
                            
                        </li>
                        <li className="nav__item">
                            <a className="nav__link">
                            {
                                isDark===true?(
                                    <>
                                        <i onClick={()=>setIsDark(false)} style={{fontSize:'20px'}} className="uil uil-sun" ></i>
                                    </>
                                    
                                ):(
                                    <>
                                        <i onClick={()=>setIsDark(true)} style={{fontSize:'20px'}} className="uil uil-moon"></i> 
                                    </>
                                    
                                )
                            }
                            </a>
                            
                        </li>
                    </ul>
                    <i onClick={()=>setToggle(false)} className="uil uil-times nav__close"></i>
                </div>
                <div className="nav__toggle">
                    <i className="uil uil-apps" onClick={()=>setToggle(true)}></i>
                </div>
            </nav>
            {(loading||loadingUser)?(
             <div style={{marginBottom:'0px'}}>
                <BarLoader className="loader" width='100%' color="black"/>   
             </div>
             ):(
                <></>
            )}
        </header>
    )
}
export default memo(Header)