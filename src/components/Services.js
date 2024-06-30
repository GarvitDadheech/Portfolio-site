import { FaAdn, FaDatabase, FaPen } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaWpexplorer } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import '../styles/Services.css';
function Services() {
    return (
        <div className="services-container" id='Services'>
            <div className="services-header">
                <h1 className='services-heading'>Services</h1>
                <p className='services-para'>These are some of the services I offer. Reach out to me if I can help you with any!</p>
            </div>
            <div className="services-body">
                
                <div className="services-body-container">
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaCode/>
                        </div>
                        <h4 className='service-name'>Frontend Development</h4>
                    </div>
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaCode/>
                        </div>
                        <h4 className='service-name'>Backend Development</h4>
                    </div>
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaDatabase/>
                        </div>
                        <h4 className='service-name'>DataBases</h4>
                    </div>
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaAdn/>
                        </div>
                        <h4 className='service-name'>Data Analysis</h4>
                    </div>
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaVideo/>
                        </div>
                        <h4 className='service-name'>Video Editing</h4>
                    </div>
                    <div className='services-content'>
                        <div className='service-img'>
                            <FaPen/>
                        </div>
                        <h4 className='service-name'>Content Writing</h4>
                    </div>
                </div>
            </div>
            


        </div>
    );
}
export default Services;