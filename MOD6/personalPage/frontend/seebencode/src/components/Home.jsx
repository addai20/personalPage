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
          <p>
            Below are are a number of curated blog posts about specific web development and technical concepts that I am interested in. Feel free to connect with me via Medium.
          </p>
        </Container>

        <Container onClick={console.log("Container Clicked!")}>
          <Row>
            <Col>
              <Card bg="dark" text="white" style={{ width: '18rem' }} >
                <Card.Header>The Web Audio API</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    A brief tutorial on how various waveforms can be generated in google chrome using the Web Audio API's Oscillator Node
                  </Card.Text>
                  <Card.Link rel="external" target="_blank" href="https://medium.com/@addai20/web-audio-api-generating-waveforms-using-oscillators-c20ddcfd5ef9">Medium</Card.Link>
                </Card.Body>
              </Card>
              <br />
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Header>About Time Complexity</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    An overview of the concept of time complexity and how it comes into play during the development process
                  </Card.Text>
                  <Card.Link rel="external" target="_blank" href="https://medium.com/@addai20/web-audio-api-generating-waveforms-using-oscillators-c20ddcfd5ef9">Medium</Card.Link>
                </Card.Body>
              </Card>
              <br />
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Dark Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Home
