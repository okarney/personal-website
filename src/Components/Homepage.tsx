import '../App.css';
import '../App';
import { Button } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import stars from "./star_background.jpg";

function Homepage() {
  const navigate = useNavigate();
    
  return (

    <div style={{backgroundImage:`url(${stars})`,
    backgroundSize: "cover",
    backgroundPosition:"center",}}>

        <div className="homepage-content">
              <h1>Olivia Karney</h1>
              <span>Homepage hello!!</span>

                <Button className="nav-buttons" onClick={() => navigate("/About")}> About </Button>
                <Button className="nav-buttons" onClick={() => navigate("/Projects")}> Projects </Button>      
                <Button className="nav-buttons" onClick={() => navigate("/Interests")}> Interests </Button>

        </div>

  </div>

  );
}
export default Homepage;