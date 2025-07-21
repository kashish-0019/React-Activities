import "./App.css";
import ProductTab from "./ProductTab.jsx";
import LikeButton from "./LikeButton.jsx";
import LudoBoard from "./LudoBoard.jsx";
import DisplayComment from './DisplayComment'
import Lottery from "./Lottery.jsx";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    {/* First Activity- Amazon Cards */}
    {/* <h2>Blockbuster Deals | Shop Now</h2>
    <ProductTab/> */}

     {/* Second Activity-Like Button */}
     {/* <h4 className='text-center mt-5'>Like Button</h4>
      <LikeButton/> */}


     {/* Third Activity-Ludo Board Moves  */}

     {/* <LudoBoard/> */}

     {/* Fourth Activity - Lottery Game */}
     {/* <Lottery/> */}

     {/* Fifth Activity - Comments Form */}
     <DisplayComment/>
 </>
  );
}

export default App;
