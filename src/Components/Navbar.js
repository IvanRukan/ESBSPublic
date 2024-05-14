import { Link } from "react-router-dom";
import background_cameras from './images/cameras_background.jpg'

const Navbar =() => {



    return(
    <div className="MainNavBarContainer">
        <nav className="topNavBar">
            <div className="navBarLinks">
                <Link activeClassName="backgroundCameras" className="navBarLink">О нас</Link>
                <Link className="navBarLink">Услуги</Link>
                <Link className="navBarLink">Контакты</Link>
            </div>
            <h1 className="navBarTitle">ЭСБС</h1>
            <Link  className="navBarEmailButton">Написать на почту</Link>
        </nav>
        <img className="backgroundCameras" src={background_cameras} />
        
    </div>
    )
}

export default Navbar