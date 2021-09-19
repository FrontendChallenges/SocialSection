import React from 'react';
import Row from 'react-bootstrap/Row';

function TextContent({ title, subtitle }) {
  return (
    <>
      <Row>
        <h1 className='text-primary fw-bold '>{title}</h1>
      </Row>
      <Row className='text-dark mt-3'>
        <p>{subtitle}</p>
      </Row>
    </>
  );
}

export default TextContent;
