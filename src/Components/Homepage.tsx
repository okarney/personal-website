import '../App.css';
import '../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
 
  const goToAbout = () => {

      // This will navigate to second component
      navigate('/About');
  };
  const goToProjects = () => {

      // This will navigate to first component
      navigate('/Projects');
  };

  // the following lines were moved from the "Our Header Function"

const goToHome = () => {

  // This will navigate to second component
  navigate('/Homepage');
};

    
  return (
    <div>
        <span>Homepage hello!!!!!!!!!!</span>

        <div>
          
            <Button className="BasicButton" onClick={goToHome}> Home </Button>
            <Button className="BasicButton" onClick={goToAbout}> About </Button>
            <Button className="BasicButton" onClick={goToProjects}> Projects </Button>      
          
        </div>
      </div>

  );
}
export default Homepage;