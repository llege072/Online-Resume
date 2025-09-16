import "../styles/AboutMe.css"
import ReactJson from "react-json-view"

function AboutMe(){
    
    const data = {
        name: "Landon Leger",
        field: "Computer Science",
        skills: {
            languages: ["C++", "Python", "JavaScript"],
            web: ["React", "Node.js", "HTML", "CSS"],
            data: ["SQL", "Pandas", "NumPy"],
            tools: ["Git", "Docker","Scikit Learn", "VSCode", "Excel"],
            networking: ["Basic network systems", "infrastructure management    "]
        },
        interests: {
            web: ["Full Stack", "Databases", "UI design"],
            AI: ["Supervised Learning"],
            networking: ["Protocols", "Subnetting"]
        }
    };

    function About(){
        return (
            <div className="content">
                <div className="json-box">
                    <ReactJson src={data} theme="monokai" collapsed={false} />
                </div>
                
                
            </div>
        )
    }
    

    
    return(<About />)

}

export default AboutMe