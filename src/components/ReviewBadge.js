import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ReviewBadge({ review, icon, order }) {
  let rating = [];
  for (let i = 0; i < 5; i++) {
    rating.push(
      <li key={i}>
        <Image src={icon} />
      </li>
    );
  }

  return (
    <Row className={`review__rating review__rating-${order}`}>
      <Col lg={5} sm={12}>
        <ul>{rating}</ul>
      </Col>
      <Col lg={7} sm={12}>
        {review}
      </Col>
    </Row>
  );
}

export default ReviewBadge;
