import React from 'react';
import './assets/sass/custom.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from './components/Footer';
import TextContent from './components/TextContent';
import ReviewBadge from './components/ReviewBadge';
import star from './assets/images/icon-star.svg';

function App() {
  return (
    <>
      <main>
        <section>
          <Container fluid={'md'}>
            <Row>
              <Col>
                <TextContent
                  title='10,000+ of our users love our products.'
                  subtitle='We only provide great products combined
                   with excellent customer service.
                   See what our satisfied customers are saying about our services.'
                />
              </Col>
              <Col>
                <ReviewBadge review='Rated 5 Stars in Reviews' icon={star} />

                <ReviewBadge
                  review='Rated 5 Stars in Report Guru'
                  icon={star}
                />
                <ReviewBadge review='Rated 5 Stars in BestTech' icon={star} />
              </Col>
            </Row>
            <Row>
              <Col>1</Col>
              <Col>2</Col>
              <Col>3</Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
