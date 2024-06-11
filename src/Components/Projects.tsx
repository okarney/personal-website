import '../App.css';
import '../App';
import linkedinIcon from "./linkedin_icon.png";
import githubIcon from "./github_icon.png";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import basicPic from "./screenshot_basic.png"
import homepagePic from "./screenshot_home.png"

function Projects() {
  const navigate = useNavigate();

    
  return (
    <div className="about-content">
          {/* <div style={{fontSize: 1, backgroundColor:"#00309B"}}>
            <br></br>
          </div> */}

          <div className="olivia-logo-corner">

  
              {/* <img src = {oliviaLogoCorner} alt = "logo" id = "image" className='fram'/>          */}
                  <Button className="nav-buttons-header" onClick={() => navigate("/Homepage")}> Home </Button>
                  <Button className="nav-buttons-header" onClick={() => navigate("/About")}> About </Button>
                  <Button className="nav-buttons-header" onClick={() => navigate("/Projects")}> Projects </Button>      
                  <Button className="nav-buttons-header" onClick={() => navigate("/Interests")}> Interests </Button>
                  <Button className="nav-buttons-header" onClick={() => navigate("/Resume")}> Resume </Button>
          
                  <div style={{fontSize: 1, backgroundColor:"#00309B"}}>
                      <br></br>
                  </div>

          </div> 
          
        

        <br></br>

        <Container style={{marginLeft: 6}} className="about-columns">
          <h1 style={{color: "#00309B"}}>Projects</h1>

          <br></br>    

          <Row>
            <Col>
                <h5 style={{color: "#00309B"}}>Career Explorer <i>(Project Manager)</i></h5>
                
                <h6 style={{color: 'black'}}><i>Tech Stack: Typescript, React, node.js, HTML, CSS</i></h6>
                For this project, I led my team of four students to create a front-end web application. This application used ChatGPT to provide users with organized career reports that suggested careers that would be a good fit based on their answers to a series of questions.
            
                <br></br>

                Features:

                <br></br>

            
            </Col>
            
            <Col>
                <Col>
                    <img className="career-pictures" src = {homepagePic} alt = "logo" id = "image"/>         

                </Col>
                <Col>
                    <img className="career-pictures" src = {basicPic} alt = "logo" id = "image"/>         
                </Col>

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
export default Projects;