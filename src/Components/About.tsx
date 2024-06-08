import '../App.css';
import oliviaLogoCorner from "./OliviaLogoCorner.png";
import linkedinIcon from "./linkedin_icon.png";
import githubIcon from "./github_icon.png";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



function About() {
 
  const navigate = useNavigate();
    
    return (
      <div className="about-content">
          <div className="olivia-logo-corner">
  
              <img src = {oliviaLogoCorner} alt = "logo" id = "image" className='fram'/>         
                  <Button className="nav-buttons-header-about" onClick={() => navigate("/About")}> About </Button>
                  <Button className="nav-buttons-header" onClick={() => navigate("/Projects")}> Projects </Button>      
                  <Button className="nav-buttons-header" onClick={() => navigate("/Interests")}> Interests </Button>
                  <Button className="nav-buttons-header" onClick={() => navigate("/Resume")}> Resume </Button>
          </div> 
          
        <div style={{fontSize: 1, backgroundColor:"#00309B"}}>
          <br></br>
        </div>

        <br></br>

        <Container style={{marginLeft: 6}} className="about-columns">
          <h1 style={{color: "#00309B"}}>About Me</h1>

          <Row>
            <Col>
                <p>Hi! My name is Olivia. I am a junior at the University of Delaware pursuing a double major in Computer Science and Applied Mathematics.</p>
            </Col>
            
            <Col>
            
            </Col>

          </Row>
        </Container>
        
        <br></br>
        <br></br>

        <br></br>

        <br></br>



        <div className="footer">

                  <Link to="https://www.linkedin.com/in/olivia-karney/">
                    <Button className="icon-buttons" type="button">
                    <img src={linkedinIcon} alt="logo" style={{ height: 30, width: 30}} />
                    </Button>
                  </Link>

                  <Link to="https://github.com/okarney">
                    <Button className="icon-buttons" type="button">
                    <img src={githubIcon} alt="logo" style={{ height: 30, width: 30}} />
                    </Button>
                  </Link>

        </div>

            
      </div>

  
    );
  }
  export default About;