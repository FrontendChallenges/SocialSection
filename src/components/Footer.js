import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {
  return (
    <footer className='mb-3'>
      <Container className='text-center'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#top'>Jinok</a>.
      </Container>
    </footer>
  );
}

export default Footer;
