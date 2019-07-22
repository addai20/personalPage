import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
  render(){
    return(
      <Container>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <Image src="https://i.imgur.com/kJtsuce.jpg" roundedCircle/>
              </Col>

              <Col>
                <Card body>
                  <Card.Title>
                    Bio:
                  </Card.Title>
                  <Card.Text>
                    Hello and thanks for stopping by! I am an enthusiastic Full-Stack web developer with a passion for solving problems using clean and efficient code! With experience in Ruby on Rails, JavaScript, React and a background in technical support, I am most excited about dissecting large problems into their more digestible parts and delivering helpful solutions that I can be proud of. I also bring strong skills in research, client relationship management and communication that help firms improve sales, increase productivity, client retention and efficiency. I am excited to hear from you!
                  </Card.Text>

                </Card>
              </Col>
            </Row>
          </Container>

        </Jumbotron>

        <Container>
          <h3> A few blogs here.. </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum magna sed erat consectetur ultrices. Sed lobortis ex sed leo posuere, sit amet semper leo molestie. Cras nec fermentum enim. Nulla at felis diam. Curabitur eros ipsum, consectetur a dapibus blandit, facilisis nec lorem. Vestibulum ullamcorper nunc vestibulum nisl bibendum placerat. Praesent eu ligula fringilla, consequat nulla ac, auctor nibh. Vestibulum non ipsum tincidunt, dictum tellus consectetur, vehicula nulla. Suspendisse sem nunc, bibendum et lectus eget, consectetur ullamcorper metus. Donec nec scelerisque sem. Praesent ultrices lectus nibh, ac sagittis mi finibus id. Suspendisse eget nunc fringilla, volutpat enim quis, ornare mi.</p>
        </Container>
      </Container>
    )
  }
}

export default Home
