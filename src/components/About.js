import '../styles/About.css';
function About() {
    return (
        <div className="about-section" id='About'>
            <div className="line-styling">
                <div className="style-circle" ></div>
                <div className="style-circle"></div>
                <div className="style-line"></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h1 className='abt-main-heading'>Who I am</h1>
                    <p className='abt-me-para-heading'>Hey, I'm Garvit Dadheech, a CS Student at Scaler School Of Technology, Bangalore.</p>
                    <br></br>
                    <p className='abt-me-para'>I am passionate about technology, innovation, and problem-solving. I love continuous learning and exploring new horizons. Beyond my dedication to tech, my interests extend to geopolitics and sports, where I find new perspectives.</p>
                </div>
                <div className="about-image">
                <lottie-player src="https://lottie.host/37ba505c-532f-46ab-9cd8-3e029c8e4206/xIfrzpi3ZE.json" className="about-pic" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
    );
}
export default About;