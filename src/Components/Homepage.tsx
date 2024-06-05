import '../App.css';
import '../App';
import { Button } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
 
  const goToAbout = () => {

      // This will navigate to the about page
      navigate('https://github.com/');
      console.log("GOING TO ABOUT!!!!");

  };
  const goToProjects = () => {

      // This will navigate to the projects page
      navigate('/Projects');
  };

const goToHome = () => {

  // This will navigate to the homepage
  navigate('/Homepage');
};

    
  return (
    <div>
        <h1>Olivia Karney</h1>
        <span>Homepage hello!!</span>

        <div>
          
            {/* <Button className="BasicButton" onClick={goToHome}> Home </Button> */}
            <Button className="BasicButton" onClick={() => navigate("/About")}> About </Button>
            {/* <Button className="BasicButton" onClick={goToProjects}> Projects </Button>       */}
          
        </div>
      </div>

  );
}
export default Homepage;