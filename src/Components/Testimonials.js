import React, { useRef } from 'react';
import './testimonials.css';
import next_icon from '../Assets/next-icon.png';
import back_icon from '../Assets/back-icon.png';
import user_1 from '../Assets/user-1.png';
import user_2 from '../Assets/user-2.png';
import user_3 from '../Assets/user-3.png';
import user_4 from '../Assets/user-4.png';


const Testimonials = () => {
    const slider = useRef(null);
    let tx = 0;

    const moveForward = () => {
        if (tx > -75) { // Adjust this value based on the number of slides and their width
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const moveBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt='Next' className='next-icon' onClick={moveForward} />
            <img src={back_icon} alt='Back' className='back-icon' onClick={moveBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='User 1' />
                                <div>
                                    <h3>Jenra Loffie</h3>
                                    <span>Eudsity, America</span>
                                </div>
                            </div>
                            <p>Choosing my degree from Eudsity is one of my best decisions.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt='User 2' />
                                <div>
                                    <h3>Lema Dev</h3>
                                    <span>Oxford, America</span>
                                </div>
                            </div>
                            <p>Choosing my degree from Oxford is one of my best decisions.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt='User 3' />
                                <div>
                                    <h3>Nederia Jackson</h3>
                                    <span>Eudsity, America</span>
                                </div>
                            </div>
                            <p>Choosing my degree from Eudsity is one of my best decisions.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt='User 4' />
                                <div>
                                    <h3>Mosh</h3>
                                    <span>Stanford, USA</span>
                                </div>
                            </div>
                            <p>Choosing my degree from Stanford is one of my best decisions.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
