import './Home.css';
import profilePic from '../../assets/profile-pic.jpeg'


const Home = () => {
  return (
    <div className='home'>
        <div className='profile-container'>
            <img src={profilePic} className='profile-pic' alt='Damon Pickett' />
        </div>
        <div className='site-title'>
            <h1>Damon the Dev</h1>
        </div>
        <div className='site-subtitle'>
            <h2>Software Developer</h2>
        </div>
        <div className='value-prop'>
            <p>Unlock the power of seamless user experiences and intelligent solutions with a front-end and AI specialist.</p>
        </div>
        <button className='contact'>Get in touch</button>
    </div>
  );
};

export default Home;
