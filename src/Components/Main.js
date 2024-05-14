import Navbar from "./Navbar"
import AboutCompany from "./AboutCompany"
import Services from "./Services"
import Poem from "./Poem"
import Advantages from "./Advantages"
import FormToContact from "./Form"
import { useRef } from "react"
import { Link } from "react-router-dom"
import background_cameras from './images/cameras_background.jpg'





const Main = () => {
    
    const NavbarMain =() => {



        return(
        <div className="MainNavBarContainer">
            <nav className="topNavBar">
                <div className="navBarLinks">
                    <Link  onClick={() => {
  const element = document.getElementById('About');
  element?.scrollIntoView({
    behavior: 'smooth'
  }); 
}} activeClassName="backgroundCameras" className="navBarLink">О нас</Link>
                    <Link onClick={() => {
  const element = document.getElementById('Services');
  element?.scrollIntoView({
    behavior: 'smooth'
  }); 
}} className="navBarLink">Услуги</Link>
                    <Link onClick={() => {
  const element = document.getElementById('Contacts');
  element?.scrollIntoView({
    behavior: 'smooth'
  }); 
}} className="navBarLink">Контакты</Link>
                </div>
                <h1 className="navBarTitle">ЭСБС</h1>
                <Link onClick={() => {window.location.href = "mailto:esbs1@yandex.ru"}}  className="navBarEmailButton">Написать на почту</Link>
            </nav>
            <img className="backgroundCameras" src={background_cameras} />
            
        </div>
        )
    }

    
    

    return (<div className="MainContainer">
        <NavbarMain />
        <div id="About"><AboutCompany ></AboutCompany></div>
       <div id="Services"><Services></Services></div>
        <Poem></Poem>
        <Advantages></Advantages>
        <div id="Contacts"><FormToContact></FormToContact></div>
    </div>)
}

export default Main