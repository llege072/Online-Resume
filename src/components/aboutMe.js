import "../styles/AboutMe.css"
import ReactJson from "react-json-view"

function AboutMe(){
    
    const data = {
        name: "Landon Leger",
        field: "Computer Science",
        skills: {
            languages: ["Python", "JavaScript", "C++"],
            web: ["React", "Node.js"],
            data: ["SQL", "Pandas", "NumPy"],
            tools: ["Github", "Docker", "Scikit Learn","Pandas/Numpy"],
            networking: ["Basic network systems", "Infra management"]
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
                        <h2>What I'm Good At and what I enjoy</h2>
                        <p>Full-stack Developement:</p>
                        <li>Back-end Developement: SQL, MySQL, PostgreSQL, Flask, Node.js</li>
                        <li>Front-end Developement: React, CSS, HTML, JSX</li>
                        
                        <br />
                        
                        <p>AI and Data Analysis:</p>
                        <li>Supervised Learning: Linear Regression, Logistic Regression</li>
                        <li>Unsupervised Learning: K-mean</li>
                        <li>Data Analysis: Python, Pandas, NumPy, MatPlotLib</li>
                    </div>

                    <div className="about-card">
                        <h2>Projects</h2>
                    </div>
                    
                    <div className="about-card">
                        <h2>What I'm Looking For</h2>
                          
                        <p>I'm still not sure as to where I'd like to position myself in the job market, but my experiences have shown me there is a wide range
                        of career opportunities in technology.</p>
                        
                        <br />
                        
                        <p>After 2 internships in internal IT roles, I discovered a passion for utilizing AI in business operations 
                        and letting it help us on understanding every day business activities and how we can improve them. I've also discoverd a passion for developing tools that simplify and solve every day problems.
                        For example, I built a Docker containerized Full Stack application to help me track my assignments in a accesible and simple way utilizing
                        React, MySQL and Flask.</p>  
                    </div>
                </div>
            </div>
        )
    }
    

    
    return(<About />)

}

export default AboutMe