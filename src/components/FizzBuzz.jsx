// Package dependencies
import React from 'react';
import styled from 'styled-components';

export function fizzBuzzCompare(time, fizz, buzz) {
  const { hours, minutes, seconds } = time;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const fizzComp = totalSeconds > 0 && totalSeconds % fizz === 0;
  const buzzComp = totalSeconds > 0 && totalSeconds % buzz === 0;
  return { fizzComp, buzzComp };
}

// Component
export default function FizzBuzz({ time, fizz, buzz }) {
  const { fizzComp, buzzComp } = fizzBuzzCompare(time, fizz, buzz);

  return (
    <Container>
      <Text show={fizzComp && !buzzComp}>Fizz</Text>
      <Text show={!fizzComp && buzzComp}>Buzz</Text>
      <Text show={fizzComp && buzzComp}>FizzBuzz</Text>
    </Container>
  );
}

const Container = styled.div`
    font-size: 80px;
    font-weight: bold;
    display: flex;
    position: relative;
    justify-content: center;

`;

const Text = styled.div`
    transition: opacity 0.5s;
    position: absolute;
    z-index: ${({ show }) => (show ? 1 : 0)};
    opacity: ${({ show }) => (show ? 1 : 0)};
`;
