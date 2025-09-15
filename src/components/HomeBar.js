import { Link } from "react-router-dom"
import "../styles/Homebar.css"
 
function HomeBar(){

    const homePagePicAdd = "/imgs/homepage.png"
    const aboutMePicAdd = "/imgs/aboutme.png"
    const projectsPicAdd = "/imgs/projects.png"
    const contactPicAdd = "/imgs/contact.png"

    const HomeBarSections = [
        {label : "Home", icon:homePagePicAdd, path : "/"}, 
        {label: "About Me", icon: aboutMePicAdd, path : "/about"}, 
        {label: "Projects", icon: projectsPicAdd, path : "/projects"}, 
        {label: "Contact Me", icon: contactPicAdd, path : "/contact"},
    ]
    
    return (
        <div className="homebar">
            {HomeBarSections.map((section) => (
                
            <Link to={section.path} className="homebar-item">
                <img 
                    src={section.icon}
                    className="homebar-icon"
                    alt="section.label"
                />
            </Link>
            ))}
        </div>
  );
}

export default HomeBar