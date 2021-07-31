import React, { Component } from 'react';
import img1 from './Taj Malabar Resort.jpg'
import img2 from './Crowne Plaza.jpg'
import img3 from './Hotel Airlink Castle.jpg'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
class Hotel_Kochi extends Component {
  render() {
    return (
      <div>
        <CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} style={{ height: '22rem' }}/>  
    <Card.Body>
     
      <Card.Title><h1>Taj Malabar Resort</h1></Card.Title>
      <Card.Text align="centre-justified">
      <h4 align="justify-centre"><i class="fas fa-swimming-pool">    2 Swimming Pools</i><br/>

      
      <i class="fas fa-shuttle-van">     Airport Shuttle</i><br/>
      <i class="fas fa-wine-glass"> Resto & Bar</i>
      </h4>
      

      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/tajMalabarResort">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"  src={img2} style={{ height: '22rem' }}/> 
    <Card.Body>
      <Card.Title><h1>Crowne Plaza</h1></Card.Title>
      <Card.Text>
      <h4><i class="fas fa-spa">    Spa</i><br/>
      <i class="fas fa-swimming-pool">    1 Swimming Pool</i><br/>
      <i class="fas fa-shuttle-van">     Airport Shuttle</i><br/><br/></h4>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/crownePlaza">Book your stay</Button></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} style={{ height: '22rem' }}/>
    <Card.Body>
      <Card.Title><h1>Hotel Airlink Castle</h1></Card.Title>
      <Card.Text>
      
      <h4 ><i class="fas fa-swimming-pool" >    1 Swimming Pool</i><br/>
      <i class="fas fa-dumbbell">    Gym</i><br/>
      <i class="fas fa-bus-alt">    City Tour</i> <br/>
      <i class="fas fa-spa">    Spa</i><br/>




      </h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/hotelAirlinkCastle">Book your stay</Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
          
      </div>
    );
  }
}

export default Hotel_Kochi;