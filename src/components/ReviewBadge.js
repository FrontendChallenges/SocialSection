import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ReviewBadge({ review, icon }) {
  let rating = [];
  for (let i = 0; i < 5; i++) {
    rating.push(
      <li key={i}>
        <Image src={icon} />
      </li>
    );
  }

  return (
    <Row className='rating'>
      <Col sm={5}>
        <ul>{rating}</ul>
      </Col>
      <Col sm={7}>{review}</Col>
    </Row>
  );
}

export default ReviewBadge;
