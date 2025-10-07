import HomeBar from "./HomeBar";
import "../styles/HomePage.css";

function HomePage() {

    function Home(){
        return(
            <div >
                
                <img src="/imgs/willsmith.png" className="homeimage" />
                
                <p className="quote">
                "If you ask me a question, and I don't know the answer,<br/>
                I'm gonna tell you that I don't know. But I bet you what.<br/>
                I know how to find the answer. And I will find the answer."<br/>
                - Will Smith, The Pursuit of Happyness (2006)
                </p>
                    
                <hr className="divider"/>
                
                <p className="description"> Mr Smith's words capture how I approach learning and problem-solving. Being the curious Computer Science Major I am, I embrace both new challenges and hardhsip with confidence. I may not always know the answers, but with passion, courage, research, experimentation and building solutions, I will find it!</p>
                
                <div className="bottom">
                <p className="para">
                    I am motivated by curiosity and the drive to build things that <br /> 
                    matter. Whether it’s Artificial Intelligence, Web Dev, or data <br />
                    analytics, I see each project as an opportunity to learn and gain <br /> 
                    confidance to reach out of the box and learn further. My journey in <br /> 
                    Computer Science is not just about obtaining knowledge, but about <br /> 
                    creating solutions that are impactful on a day-to-day basis. This <br />
                    website serves as a platform where my projects are showcased <br /> 
                    and my interests are discussed. This website utilizes React/JS/CSS. <br />
                </p>
                
                <img src="/imgs/profile.png" className="profile"></img>
                </div>    
                
            </div>
        )
    }


    return (<Home />);
}

export default HomePage