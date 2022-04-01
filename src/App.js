import React, { useState } from 'react';
import './main.css';

import image1  from './images/1.jpg';
import { data } from './data/data.js';
import Flower from './Components/Flower/Flower.js';
import FlowerDetails from './Components/FlowerDetalis/FlowerDetails';

//jsx-functional-component
const App = () => {

  const [flower, setFlower] = useState({});


  return (
   <div>
     <div>
       <FlowerDetails flower ={flower}/>

     </div>
      <div className="main">
      {
        data.map(d=>  <Flower d={d} setFlower={setFlower}/>)
}
</div>
   </div>
  )}

export default App;
