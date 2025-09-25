import "../styles/AboutMe.css"
import ReactJson from "react-json-view"

function AboutMe(){
    
    const data = {
        name: "Landon Leger",
        field: "Computer Science",
        skills: {
            languages: ["Python", "JavaScript", "C++"],
            web: ["React", "Node.js", "HTML", "CSS"],
            data: ["SQL", "Pandas", "NumPy"],
            tools: ["Github", "Docker", "Scikit Learn","Pandas/Numpy"],
            networking: ["Basic network systems", "Infra management"]
        },
        interests: {
            web: ["Full Stack", "Databases", "UI design"],
            AI: ["Supervised Learning"],
            networking: ["Protocols", "Subnetting"]
        }
    };

    const customTheme = {

        // background
        base00: "#F5F1ED",      
        
        //num of items
        base04: "#000",

        //color of column 
        base07: "#000",

        //Values
        base09: "#000", 

        base01:"#000",
        base02: "#000",
        base03: "#000",
        base05: "#000",      
        base06: "#000",        
        base08: "#000",
        base0A: "#000",
        base0B: "#000",
        base0C: "#000",
        base0D: "#000",
        base0E: "#000",
        base0F: "#000"
    };

    function About(){
        return (
            <div className="content">
                <div className="json-box">
                    <ReactJson src={data} theme={customTheme} collapsed={false} />
                </div>
                <div className="about-container">
                    <div className="about-card">
                        <h2>Who I Am</h2>
                        <p>Hi there! My name is Landon Leger, I grew up in Cornwall Ontario Canada.
                           After graduating highschool, I had a feeling Computer Science with an option in Managament
                           and entrepreneurship would open many career doors
                        </p>
                        <br/>   
                        <p>Throughout my few years, I have learned (no pun intended) that learning is not getting A+s, it is the capability of utilizing what you have learned and applying it in your everyday life. Driven by motivation, I hope to contribute positively to the everyday applications of AI and business analytics.</p>
                        
                    </div>
                    
                    <div className="about-card">
                        <h2>What I'm Good At</h2>                    
                    </div>

                    <div className="about-card">
                        <h2>Experience & Projects</h2>
                    </div>
                    
                    <div className="about-card">
                        <h2>What I'm Looking For</h2>                    
                    </div>
                </div>
            </div>
        )
    }
    

    
    return(<About />)

}

export default AboutMe