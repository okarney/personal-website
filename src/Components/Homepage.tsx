import '../App.css';
import '../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import oliviaLogo from "./OliviaLogo.png";

function Homepage() {
  const navigate = useNavigate();
    
  return (

    // <div style={{backgroundImage:`url(${stars})`,
    // backgroundSize: "cover",
    // backgroundPosition:"center",}}>
      <div className="homepage-content">
            <div>
              <br></br>
            </div>
            <div className="olivia-logo">
              <img src = {oliviaLogo} alt = "logo" id = "image" className='fram'/>         
            </div>
            <br></br>
            
            {/* <div className='button-group'> */}

            
            
            <Container>
                <Row>
                    <Col>
                        <Button className="nav-buttons" onClick={() => navigate("/About")}> About </Button>
                    </Col>
                    <Col>
                        <Button className="nav-buttons" onClick={() => navigate("/Projects")}> Projects </Button>      
                    </Col>
                
                    <Col>
                        <Button className="nav-buttons" onClick={() => navigate("/Interests")}> Interests </Button>
                    </Col>
                    <Col>
                        <Button className="nav-buttons" onClick={() => navigate("/Resume")}> Resume </Button>
                    </Col>
                </Row>
            </Container>
            {/* </div> */}

       </div>
  );
}
export default Homepage;