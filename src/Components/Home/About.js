import React from 'react';
import user from './user.png';

const About = () => {
    return (
        <>
            <div className="about col-md-12" style={{
                backgroundImage: `url("https://icons8.com/icons/set/user")`
            }} >
                <h1 className='card col-md-12'>About Page
                </h1>
                <img src={user} alt='user' className='col-md-12 pd-10' style={{hieght:'10vh',width:'200px', margin:'auto', display:'block'}} />
                <p className='flex col-md-12'>This web App is only for finding the github user.
                Develop by Azim Ansari and Vikash Rahii</p>
            </div>
        </>
    )
}

export default About;