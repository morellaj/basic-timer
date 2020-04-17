
// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component
export default function TimerButton({ text, color, click }) {
  return (
    <Container onClick={click} color={color}>
      {text}
    </Container>
  );
}

const Container = styled.div`
  margin-right: 30px;
  width: 200px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
