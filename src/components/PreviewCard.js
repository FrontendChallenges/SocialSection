import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function PreviewCard({ children, photo, name, buyerTitle }) {
  return (
    <Col className='preview-card p-5'>
      <Row className='align-items-center'>
        <Col>
          <Image
            src={photo}
            alt='Irene Roberts'
            roundedCircle
            className='preview-card__photo'
          />
        </Col>
        <Col xs={9}>
          <p>{name}</p>
          <p>{buyerTitle}</p>
        </Col>
      </Row>
      <Row className='pt-5'>{children}</Row>
    </Col>
  );
}

export default PreviewCard;
