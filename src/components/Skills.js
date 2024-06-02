import Marquee from "react-fast-marquee";
import '../styles/Skills.css';
function Skills() {
    return(
        <div className="skills-container" id="Skills">
            <div className="skills-heading-container">
                <h2 className="skill-heading">Skills</h2>
            </div>
            <Marquee pauseOnHover={true}>
                <div className="skill-scroll">
                    <div className="scroll-items">
                        <div className="skill">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="HTML" className="skill-img"/>
                            <h3 className="skill-name">HTML</h3>
                        </div>
                        <div className="skill">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" alt="CSS" className="skill-img"/>
                            <h3 className="skill-name">CSS</h3>
                        </div>
                        <div className="skill">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" alt="JS" className="skill-img"/>
                            <h3 className="skill-name">JavaScript</h3>
                        </div>
                        <div className="skill">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="React" className="skill-img"/>
                            <h3 className="skill-name">React</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/452234/java.svg" alt="Java" className="skill-img"/>
                            <h3 className="skill-name">Java</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/473742/pandas.svg" alt="Pandas" className="skill-img"/>
                            <h3 className="skill-name">Pandas</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/376350/spring.svg" alt="SpringBoot" className="skill-img"/>
                            <h3 className="skill-name">SpringBoot</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/452091/python.svg" alt="Python" className="skill-img"/>
                            <h3 className="skill-name">Python</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/473818/unity.svg" alt="Unity" className="skill-img"/>
                            <h3 className="skill-name">Unity</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/448236/linux.svg" alt="Linux" className="skill-img"/>
                            <h3 className="skill-name">Linux</h3>
                        </div>
                        <div className="skill">
                            <img src="https://www.svgrepo.com/show/355133/mysql.svg" alt="mysql" className="skill-img"/>
                            <h3 className="skill-name">My SQL</h3>
                        </div>


                    </div>
                </div>
            </Marquee>
        
        </div>
    );
}
export default Skills;