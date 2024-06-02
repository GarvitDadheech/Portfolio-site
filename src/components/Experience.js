import '../styles/Experience.css'
import profilePic from '../assets/profile_pic.jpeg';
function Experience() {
  return (
    <div className="exp-container" id='Experience'>
      <div className='exp-body'>
        <div className='experience-img'>
        <lottie-player src="https://lottie.host/bc1aaaa6-7a63-4241-a4bb-0e7c94b80d23/OSQVUluCy3.json" background="##FFFFFF" speed="1"  loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div className="exp-description">
                <h1 className="exp-heading">Experience</h1>
                <div className="exp-card">
                    <div className="expcard-img">
                        <img src='https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg' alt='exp-img' className='exp-img'/>
                    </div>
                    <div className="expcard-details">
                    <h6 className='year'>2024-Present</h6>
                    <h4 className='exp-type'>Project Intern</h4>
                    <h5 className='insti-name'>Urban Company</h5>
                    </div>
                </div>
                <div className="exp-card">
                    <div className="expcard-img">
                    <img src='https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg' alt='exp-img' className='exp-img'/>
                    </div>
                    <div className="expcard-details">
                    <h6 className='year'>2023-2024</h6>
                    <h4 className='exp-type'>Software Developer</h4>
                    <h5 className='insti-name'>Freelancing</h5>
                    </div>
                </div>
                <div className="exp-card">
                    <div className="expcard-img">
                    <img src='https://dev-portfolio-template.netlify.app/static/media/expImgWhite.0b896d9c.svg' alt='exp-img' className='exp-img'/>
                    </div>
                    <div className="expcard-details">
                    <h6 className='year'>2023-2024</h6>
                    <h4 className='exp-type'>Video Editing</h4>
                    <h5 className='insti-name'>Freelancing</h5>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}
export default Experience;