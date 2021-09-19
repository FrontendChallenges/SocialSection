import React from 'react';
import './assets/sass/custom.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from './components/Footer';
import TextContent from './components/TextContent';
import ReviewBadge from './components/ReviewBadge';
import PreviewCard from './components/PreviewCard';
import star from './assets/images/icon-star.svg';
import customer_01 from './assets/images/image-colton.jpg';
import customer_02 from './assets/images/image-irene.jpg';
import customer_03 from './assets/images/image-anne.jpg';

function App() {
  return (
    <>
      <main>
        <section>
          <Container fluid={'md'}>
            <Row>
              <Col xs={4}>
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
              <PreviewCard
                photo={customer_01}
                name='Colton Smith '
                buyerTitle='Verified Buyer'
              >
                "We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Excellent!"
              </PreviewCard>

              <PreviewCard
                photo={customer_02}
                name='Irene Roberts'
                buyerTitle='Verified Buyer'
              >
                "Customer service is always excellent and very quick turn
                around. Completely delighted with the simplicity of the purchase
                and the speed of delivery."
              </PreviewCard>

              <PreviewCard
                photo={customer_03}
                name='Anne Wallace'
                buyerTitle='Verified Buyer'
              >
                "Put an order with this company and can only praise them for the
                very high standard. Will definitely use them again and recommend
                them to everyone!"
              </PreviewCard>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
