import '../styles/Education.css';
import profilePic from '../assets/profile_pic.jpeg';
function Education() {
    return (
        <div className="ed-body" id='Education'>
            <div className="ed-description">
                <h1 className="ed-heading">Education</h1>
                <div className="ed-card">
                    <div className="edcard-img">
                        <img src='https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg' alt='ed-img' className='ed-img'/>
                    </div>
                    <div className="edcard-details">
                    <h6 className='year'>2020-2022</h6>
                    <h4 className='ed-type'>Higher Secondary Education</h4>
                    <h5 className='insti-name'>Sophia Public School, Rajsamand</h5>
                    </div>
                </div>
                <div className="ed-card">
                    <div className="edcard-img">
                    <img src='https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg' alt='ed-img' className='ed-img'/>
                    </div>
                    <div className="edcard-details">
                    <h6 className='year'>2023-2026</h6>
                    <h4 className='ed-type'>BS Computer Science</h4>
                    <h5 className='insti-name'>BITS Pilani</h5>
                    </div>
                </div>
                <div className="ed-card">
                    <div className="edcard-img">
                    <img src='https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg' alt='ed-img' className='ed-img'/>
                    </div>
                    <div className="edcard-details">
                    <h6 className='year'>2023-2027</h6>
                    <h4 className='ed-type'>Undergrad Program</h4>
                    <h5 className='insti-name'>Scaler School Of Technology</h5>
                    </div>
                </div>
            </div>
            <div className="ed-image">
            <lottie-player src="https://lottie.host/b4c399dc-2ac9-495c-8116-df7edc3e1f02/gKVUmL0hhW.json" background="##FFFFFF" speed="1"  loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>
    );
}
export default Education;