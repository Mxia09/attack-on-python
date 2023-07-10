import russImage from './images/russ.jpg';
import maxImage from './images/max.png';
import marvinImage from './images/marvin.png';
import jorgeImage from './images/jorge.png';
import fredImage from './images/fred.png';
import logo from './images/attack-on-python-logo.png';
import gitLabImage from './images/gitlab-image.png';
import linkedInImage from './images/linkedin-image.png';

function About() {
  return (
    <div className="outer-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <img style={{ marginTop: "30px"}} src={logo} height="100px" width="100px"/>
      <h1 style={{ marginBottom: "30px", marginTop: "30px"}}>About us</h1>
      <div className="info-container" style={{ border: '1px solid black', padding: '20px', maxWidth: '600px', textAlign: 'center' }}>
        <h2 style={{ marginTop: "30px"}}>Info</h2>
        <p>
          Attack on Python is a single-player RPG about a young hero, looking to fight back
          against the oppressive Pythons. The hero must learn to combat this new-found
          enemy using the Pythons' ancient form of spell casting, known as coding. Through
          studying the ancient documentation and perseverance, this young hero will improve
          their problem-solving skills, using Python methods to defeat the Pythons and save
          Paradev Island!
        </p>
      </div>
      <h2 style={{ marginTop: "70px"}}> Our Team</h2>
      <div className="devs-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="dev-container" style={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={russImage} alt="Russ_image" height="100px" width="100px" style={{ marginBottom: '10px' }} />
            <h5 style={{ margin: '0' }}>Russ</h5>
            <p style={{ margin: '0' }}>Software Engineer</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://gitlab.com/russcanhelp" target="_blank" rel="noopener noreferrer" style={{ marginRight: '5px' }}><img src={gitLabImage} height="50px" width="50px" /></a>
                <a href="https://www.linkedin.com/in/russell-cruz/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}><img src={linkedInImage} alt="linked_in_image" height="50px" width="50px" /></a>
            </div>
        </div>
         <div className="dev-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={maxImage} alt="Max_image" height="100px" width="100px" style={{ marginBottom: '10px' }} />
            <h5 style={{ margin: '0' }}>Max</h5>
            <p style={{ margin: '0' }}>Software Engineer</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://gitlab.com/mvxwang" target="_blank" rel="noopener noreferrer" style={{ marginRight: '5px' }}><img src={gitLabImage} height="50px" width="50px" /></a>
                <a href="https://www.linkedin.com/in/maxwangasu/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}><img src={linkedInImage} alt="linked_in_image" height="50px" width="50px" /></a>
            </div>
        </div>
        <div className="dev-container" style={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={marvinImage} alt="Marvin_image" height="100px" width="100px" style={{ marginBottom: '10px' }} />
            <h5 style={{ margin: '0' }}>Marvin</h5>
            <p style={{ margin: '0' }}>Software Engineer</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://gitlab.com/Mxia09" target="_blank" rel="noopener noreferrer" style={{ marginRight: '5px' }}><img src={gitLabImage} height="50px" width="50px" /></a>
                <a href="https://www.linkedin.com/in/marvin-xia/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}><img src={linkedInImage} alt="linked_in_image" height="50px" width="50px" /></a>
            </div>
        </div>
        <div className="dev-container" style={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={jorgeImage} alt="Jorge_image" height="100px" width="100px" style={{ marginBottom: '10px' }} />
            <h5 style={{ margin: '0' }}>Jorge</h5>
            <p style={{ margin: '0' }}>Software Engineer</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://gitlab.com/landerosjorge" target="_blank" rel="noopener noreferrer" style={{ marginRight: '5px' }}><img src={gitLabImage} height="50px" width="50px" /></a>
                <a href="https://www.linkedin.com/in/landerosjorge/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}><img src={linkedInImage} alt="linked_in_image" height="50px" width="50px" /></a>
            </div>
        </div>
           <div className="dev-container" style={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={fredImage} alt="Fred_image" height="100px" width="100px" style={{ marginBottom: '10px' }} />
            <h5 style={{ margin: '0' }}>Fred</h5>
            <p style={{ margin: '0' }}>Software Engineer</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://gitlab.com/fred3bowden" target="_blank" rel="noopener noreferrer" style={{ marginRight: '5px' }}><img src={gitLabImage} height="50px" width="50px" /></a>
                <a href="https://www.linkedin.com/in/fred-bowden-373224213/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}><img src={linkedInImage} alt="linked_in_image" height="50px" width="50px" /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
