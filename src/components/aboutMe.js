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
        base00: "black",      
        
        //num of items
        base04: "#20C20E",

        //color of column 
        base07: "#20C20E",

        //Values
        base09: "#20C20E",
         
        base01:"#20C20E",
        base02: "#20C20E",
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
                <div>
                    <div className="about-card">
                        <div className="about-card-text">
                            <h2>Who I Am</h2>
                            <p>Hi there! My name is Landon Leger, I grew up in Cornwall Ontario Canada.
                            After graduating highschool, I had a feeling Computer Science with an option in Managament
                            and entrepreneurship would open many career doors
                            </p>
                            <br/>   
                            <p>Throughout my few years, I have learned (no pun intended) that learning is not getting A+s, it is the capability of utilizing what you have learned and applying it in your everyday life. Driven by motivation, I hope to contribute positively to the everyday applications of AI and business analytics.</p>
                        </div>
                    </div>
                    
                    <div className="about-card">
                        <div className="about-card-text">
                            <h2>Experience In</h2>
                            <h3>Full-stack Developement:</h3>
                            <p>Back-end Developement: SQL, MySQL, PostgreSQL, Flask, Node.js</p>
                            <p>Front-end Developement: React, CSS, HTML, JS</p>
                        
                            <h3>AI and Data Analysis:</h3>
                            <p>Supervised Learning: Linear Regression, Logistic Regression</p>
                            <p>Unsupervised Learning: K-mean</p>
                            <p>Data Analysis: Python, Pandas, NumPy, MatPlotLib</p>

                            <h3>OOP programming and Data structures:</h3>
                            <p>Utilize OOP in different languages like Python, Java, JavaScript, C++</p>
                            <p>Unsupervised Learning: K-mean</p>
                            <p>Data Analysis: Python, Pandas, NumPy, MatPlotLib</p>
                        </div>
                    </div>
                    
                    <div className="about-card">
                        <div className="about-card-text">
                            <h2>What I'm Looking For</h2>
                          
                            <p>I'm still not sure as to where I'd like to position myself in the job market, but my experiences have shown me there is a wide range
                            of career opportunities in Technology.</p>
                        
                            <br />
                        
                            <p>After 2 internships in internal IT roles, a discovered passion for building 
                            and utilizing AI in both business and private settings, a motivation to create 
                            tools that help and simplify our lifes in multiple ways found by creating a 
                            containerized Assignment-Class organizer utilizing Flask and React.
                            </p>

                            <br />

                            <p>I hope to be able to apply and grow my knowledge in a working setting
                               that allows me to be innovative, confident and supported, 
                               surrounded by a team of like-minded people.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    
    return(<About />)

}

export default AboutMe