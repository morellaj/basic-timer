
// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component
export default function NavButton({ text, update }) {
  return (
    <Container onClick={update}>
      {text}
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color};
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
