import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function PreviewCard({ children, photo, name, buyerTitle, order }) {
  return (
    <Col>
      <div className={`preview__box preview__box-${order}`}>
        <Row className='align-items-center'>
          <Col xs={3}>
            <Image
              src={photo}
              alt='Irene Roberts'
              roundedCircle
              className='preview__photo'
            />
          </Col>
          <Col xs={7}>
            <p>{name}</p>
            <p>{buyerTitle}</p>
          </Col>
        </Row>
        <Row className='pt-5'>{children}</Row>
      </div>
    </Col>
  );
}

export default PreviewCard;
