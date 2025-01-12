import RealFace from "../assets/real-face.jpeg"
import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-image-container">
                <img 
                    className="intro-image"
                    src={RealFace}
                    alt="Picture of John's face :-)"
                />
            </div>
            <div className="intro-text-container">
                <h1>Hey there!</h1>
                <div className="intro-text-links">
                    <a href="https://github.com/JT-AW" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={Github} 
                            alt="GitHub" 
                            style={{ width: '50px', height: '50px' }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/john-z-wang/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={LinkedIn} 
                            alt="LinkedIn" 
                            style={{ width: '50px', height: '50px' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}