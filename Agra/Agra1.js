import React from "react";
import { Container, Row, Col,} from "reactstrap";
import AgraCarousel from "./AgraCarousel";


import imgCard6 from "./AgraImage6.jpg"

import Activity from"./Activity_Agra.js"
import Culture from"./Culture.js"
const Agra1= () => (
    <div><div classNmae="PageLayout">
      <h1 style={{ fontFamily: 'Times New Romon' , color: "" ,fontSize:50}}>AGRA</h1>
  <div className="subComponent" >
    <section className="tour-cover item-center">
        <img src={imgCard6} alt="" />
       </section>
    <Container>
      <section>
        <Row sm="8">
          <Col sm="8">
      <AgraCarousel/>
            
          </Col>
          <Col sm="4">
  <h6 align="centre"style={{ fontFamily: 'Patrick Hand SC' , color: "#b13434" }}><br/><br/><br/> The ‘Land of Taj Mahal’ and the City of Pethas’, Agra is inarguably one of the most-visited travel destinations in India. <br/><br/>       Be it the historical sites that take tourists back to the rich Mughal history, bustling streets, vibrant shopping markets to buy some amazing stuff, and the lip-smacking fares to treat your taste buds with indelible tastes, Agra offers a memorable vacation in all senses.<br/> <br/>       Wish to realize a dream vacation? Welcome to the amazing tourism city of the TajMahal - Agra, India. The seat of the great Mughal rulers for ages Agra, India offers its treasure trove for all the tourists from India and abroad.<br/><br/> Even though Agra, India is synonymous with the Taj, the city stands in testimony to the great amount of architectural activity of the Mughals. TajMahal is the epitome of love, poem in white marble, one of the Seven Wonders of the World besides being the pride of India. In fact all the monuments of Agra, India have contributed to Agra Tourism<br/>
              </h6>
             
          </Col>
        </Row>
      </section>
      </Container>
      <br/>
      <br/>
      <div className="Activities"><h1>PLACES TO VISIT</h1>
      <Activity/>
<br/>
</div>
<iframe width="853" height="480" src="https://www.youtube.com/embed/5VrAze5EoxE" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
<div className="Activities"><h1>CULTURE</h1>

      <Culture/>
      
<br/>
</div>

    
    
  </div>
  
    </div>
    
    </div>
);

export default Agra1;